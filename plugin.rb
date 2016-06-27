# name: test-plugin
# about: testing repository transitory plugin
# version: 0.1
# authors: Mittineague
# url: https://github.com/Mittineague/test-plugin.git

require 'topic_user'

module TopicUserFix
  def self.included base
    base.class_eval do

    self.(:remove_const, UPDATE_TOPIC_USER_SQL) if const_defined?(UPDATE_TOPIC_USER_SQL)
    const_set(UPDATE_TOPIC_USER_SQL, "UPDATE topic_users
                                    SET
                                      last_read_post_number = GREATEST(:post_number, tu.last_read_post_number),
                                      highest_seen_post_number = t.highest_post_number,
                                      total_msecs_viewed = LEAST(tu.total_msecs_viewed + :msecs,86400000),
                                      notification_level =
                                         case when tu.notifications_reason_id is null and (tu.total_msecs_viewed + :msecs) >
                                            coalesce(uo.auto_track_topics_after_msecs,:threshold) and
                                            coalesce(uo.auto_track_topics_after_msecs, :threshold) >= 0 then
                                              :tracking
                                         else
                                            tu.notification_level
                                         end
                                      first_visited_at = COALESCE(tu.first_visited_at, DateTime.now)
                                  FROM topic_users tu
                                  join topics t on t.id = tu.topic_id
                                  join users u on u.id = :user_id
                                  join user_options uo on uo.user_id = :user_id
                                  WHERE
                                       tu.topic_id = topic_users.topic_id AND
                                       tu.user_id = topic_users.user_id AND
                                       tu.topic_id = :topic_id AND
                                       tu.user_id = :user_id
                                  RETURNING
                                    topic_users.notification_level, tu.notification_level old_level, tu.last_read_post_number
                                ")

   end
 end
end

TopicUser.send(:include, TopicUserFix)