# name: test-plugin
# about: testing repository transitory plugin
# version: 0.1
# authors: Mittineague
# url: https://github.com/Mittineague/test-plugin.git

enabled_site_setting :test_plugin_enabled

# register_asset "javascripts/discourse/controllers/test-plugin.js.es6"
# register_asset "javascripts/discourse/helpers/test-plugin.js.es6"
register_asset "javascripts/discourse/initializers/test-plugin.js.es6"
register_asset "javascripts/discourse/templates/connectors/user-card-post-names/test-plugin.js.es6"

=begin

PLUGIN_NAME ||= 'test_plugin'.freeze

after_initialize do
  module ::TestPlugin
    class Engine < ::Rails::Engine
      engine_name PLUGIN_NAME
      isolate_namespace TestPlugin
    end
  end
end


Nothing to see here

=end