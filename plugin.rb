# name: test-plugin
# about: testing repository transitory plugin
# version: 0.1
# authors: Mittineague
# url: https://github.com/Mittineague/test-plugin.git

enabled_site_setting :test_plugin_enabled

register_asset "javascripts/discourse/connectors/user-card-post-names/user-card-test-plugin.js.es6"
# register_asset "javascripts/discourse/controllers/controller-test-plugin.js.es6"
register_asset "javascripts/discourse/helpers/helper-test-plugin.js.es6"
register_asset "javascripts/discourse/initializers/initializer-test-plugin.js.es6"
register_asset "javascripts/discourse/templates/connectors/user-card-post-names/user-card-test-plugin.hbs"
register_asset "stylesheets/test-plugin.scss"

PLUGIN_NAME ||= 'test-plugin'.freeze

after_initialize do
  module ::TestPlugin
    class Engine < ::Rails::Engine
      engine_name PLUGIN_NAME
      isolate_namespace TestPlugin
    end

    def user_gender
      "male"
    end
  end
end

=begin

Nothing to see here

=end