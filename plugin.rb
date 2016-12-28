# name: test-plugin
# about: testing repository transitory plugin
# version: 0.1
# authors: Mittineague
# url: https://github.com/Mittineague/test-plugin.git

enabled_site_setting :test_plugin_enabled

register_asset "javascripts/discourse/connectors/user-card-post-names/user-card-test-plugin.js.es6"
# register_asset "javascripts/discourse/controllers/controller-test-plugin.js.es6"
# register_asset "javascripts/discourse/helpers/helper-test-plugin.js.es6"
register_asset "javascripts/discourse/initializers/initializer-test-plugin.js.es6"
register_asset "javascripts/discourse/templates/connectors/user-card-post-names/user-card-test-plugin.hbs"
register_asset "stylesheets/test-plugin.scss"

=begin
Nothing to see here
=end