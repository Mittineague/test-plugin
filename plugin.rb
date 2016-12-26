# name: test-plugin
# about: testing repository transitory plugin
# version: 0.1
# authors: Mittineague
# url: https://github.com/Mittineague/test-plugin.git

enabled_site_setting :test_plugin_enabled

register_asset "javascripts/discourse/templates/connectors/user-card-post-names/mitt-test-plugin.hbs"

after_initialize do
  module ::TestPlugin
    class Engine < ::Rails::Engine
      engine_name "test_plugin"
      isolate_namespace TestPlugin
    end
  end

  require_dependency 'user'
  def current_user_id
    User.current_user.id || 2
  end

  def user_like_count
    sql = <<-SQL
            SELECT user.like_count
            FROM user
            WHERE user.id = :current_user_id
    SQL
    ActiveRecord::Base.exec_sql(sql) || 999
  end
end