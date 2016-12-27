export default {
  setupComponent(args, component) {
    component.set('user_like_count', '99');
  };

  shouldRender(args, component) {
    return component.siteSettings.test_plugin_enabled;
  };
}