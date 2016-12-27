export default {
  setupComponent(args, component) {
    component.set('user_like_count', '99');
  };

api.registerConnectorClass('user-card-post-names', 'test-plugin', {
    shouldRender(args, component) {
        return component.siteSettings.test_plugin_enabled;
    }
});
}