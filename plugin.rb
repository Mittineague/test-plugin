# name: test-plugin
# about: testing repository transitory plugin
# version: 0.1
# authors: Mittineague
# url: https://github.com/Mittineague/test-plugin.git

require 'topic_user'

module TopicUserFix
  def self.included base
    base.class_eval do

    def track_visit!(topic_id, user_id)
      now = DateTime.now
      rows = TopicUser.where(topic_id: topic_id, user_id: user_id).update_all(last_visited_at: now)

      if rows == 0
        TopicUser.create(topic_id: topic_id, user_id: user_id, last_visited_at: now, first_visited_at: now)
      else
        observe_after_save_callbacks_for(topic_id, user_id)
      end
    end

    # Update the last read and the last seen post count, but only if it doesn't exist.
    # This would be a lot easier if psql supported some kind of upsert

    self.(:remove_const, UPDATE_TOPIC_USER_SQL) if const_defined?(UPDATE_TOPIC_USER_SQL)
    const_set(UPDATE_TOPIC_USER_SQL,
                              "UPDATE topic_users
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

    self.(:remove_const, INSERT_TOPIC_USER_SQL) if const_defined?(INSERT_TOPIC_USER_SQL)
    const_set(INSERT_TOPIC_USER_SQL,
                                  "INSERT INTO topic_users (user_id, topic_id, last_read_post_number, highest_seen_post_number, last_visited_at, first_visited_at, notification_level)
                  SELECT :user_id, :topic_id, :post_number, ft.highest_post_number, :now, :now, :new_status
                  FROM topics AS ft
                  JOIN users u on u.id = :user_id
                  WHERE ft.id = :topic_id
                    AND NOT EXISTS(SELECT 1
                                   FROM topic_users AS ftu
                                   WHERE ftu.user_id = :user_id and ftu.topic_id = :topic_id)")

    def update_last_read(user, topic_id, post_number, msecs, opts={})
      return if post_number.blank?
      msecs = 0 if msecs.to_i < 0

      args = {
        user_id: user.id,
        topic_id: topic_id,
        post_number: post_number,
        now: DateTime.now,
        msecs: msecs,
        tracking: notification_levels[:tracking],
        threshold: SiteSetting.default_other_auto_track_topics_after_msecs
      }

      # In case anyone seens "highest_seen_post_number" and gets confused, like I do.
      # highest_seen_post_number represents the highest_post_number of the topic when
      # the user visited it. It may be out of alignment with last_read, meaning
      # ... user visited the topic but did not read the posts
      #
      # 86400000 = 1 day
      rows = exec_sql(UPDATE_TOPIC_USER_SQL,args).values

      if rows.length == 1
        before = rows[0][1].to_i
        after = rows[0][0].to_i

        before_last_read = rows[0][2].to_i

        if before_last_read < post_number
          # The user read at least one new post
          TopicTrackingState.publish_read(topic_id, post_number, user.id, after)
          user.update_posts_read!(post_number - before_last_read, mobile: opts[:mobile])
        end

        if
    self.(:remove_const, UPDATE_TOPIC_USER_SQL) if const_defined?(UPDATE_TOPIC_USER_SQL)
    const_set(UPDATE_TOPIC_USER_SQL,
                              "UPDATE topic_users
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

    self.(:remove_const, INSERT_TOPIC_USER_SQL) if const_defined?(INSERT_TOPIC_USER_SQL)
    const_set(INSERT_TOPIC_USER_SQL,
                                  "INSERT INTO topic_users (user_id, topic_id, last_read_post_number, highest_seen_post_number, last_visited_at, first_visited_at, notification_level)
                  SELECT :user_id, :topic_id, :post_number, ft.highest_post_number, :now, :now, :new_status
                  FROM topics AS ft
                  JOIN users u on u.id = :user_id
                  WHERE ft.id = :topic_id
                    AND NOT EXISTS(SELECT 1
                                   FROM topic_users AS ftu
                                   WHERE ftu.user_id = :user_id and ftu.topic_id = :topic_id)") != after
          MessageBus.publish("/topic/#{topic_id}", { notification_level_change: after }, user_ids: [user.id])
        end
      end

      if rows.length == 0
        # The user read at least one post in a topic that they haven't viewed before.
        args[:new_status] = notification_levels[:regular]
        if (user.user_option.auto_track_topics_after_msecs || SiteSetting.default_other_auto_track_topics_after_msecs) == 0
          args[:new_status] = notification_levels[:tracking]
        end
        TopicTrackingState.publish_read(topic_id, post_number, user.id, args[:new_status])

        user.update_posts_read!(post_number, mobile: opts[:mobile])

        begin
          exec_sql(INSERT_TOPIC_USER_SQL, args)
        rescue PG::UniqueViolation
          # if record is inserted between two statements this can happen
          # we retry once to avoid failing the req
          if opts[:retry]
            raise
          else
            opts[:retry] = true
            update_last_read(user, topic_id, post_number, msecs, opts)
          end
        end

        MessageBus.publish("/topic/#{topic_id}", { notification_level_change: args[:new_status] }, user_ids: [user.id])
      end
    end

   end
 end
end

TopicUser.send(:include, TopicUserFix)