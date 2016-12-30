import { thecurrentuser, thelocale} from 'discourse/plugins/test-plugin/discourse/lib/utilities';

export default {
  shouldRender(args, component) {
     return component.siteSettings.test_plugin_enabled;
  },
  setupComponent(args, component) {
    component.set('user_nick_name', thecurrentuser(Discourse) );
    component.set('user_like_count', 362436);
    component.set('user_gender', 'female');
    component.set('user_age', 21);
    component.set('user_location', thelocale(I18n) );
  }
}