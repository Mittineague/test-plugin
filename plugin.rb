# name: test-plugin
# about: testing repository transitory plugin
# version: 0.1
# authors: Mittineague
# url: https://github.com/Mittineague/test-plugin.git

register_asset "javascripts/discourse/templates/connectors/user-card-post-names/mitt-test-plugin.hbs"

after_initialize do
  module ::TestPlugin
    class Engine < ::Rails::Engine
      engine_name "test_plugin"
      isolate_namespace TestPlugin
  end

  require_dependency 'user'
  def current_user_id
    user.current_user.id
  end

  def user_like_count
#   User.like_oount(current_user)
    sql = <<-SQL
            SELECT user.like_count
            FROM user
            WHERE user.id = :current_user_id
    SQL
    ActiveRecord::Base.exec_sql(sql) rescue nil
#      render json: TestPlugin.user_like_count
  end
end