import { withPluginApi } from 'discourse/lib/plugin-api';

function priorToApi(container)
{
}

function initializePlugin(api)
{
  if SiteSetting.test_plugin_enabled then
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
}

export default {
  name: 'test-plugin',
  initialize: function() {
    withPluginApi('0.1', api => initializePlugin(api), { noApi: () => priorToApi() });
  }
}