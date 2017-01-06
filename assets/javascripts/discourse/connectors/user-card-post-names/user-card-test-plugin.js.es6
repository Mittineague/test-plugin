import { thecurrentuser,
         themembername,
         theuserlikesreceived,
         thelocale,
         new_test} from 'discourse/plugins/test-plugin/discourse/lib/lib-test-plugin';

export default {
  shouldRender(args, component) {
     return component.siteSettings.test_plugin_enabled;
  },
  setupComponent(args, component) {
//    component.set('user_nick_name', thecurrentuser(Discourse) );
//    component.set('user_like_count', 123 );
//    component.set('user_gender', themembername() );
//    component.set('user_age', theuserlikesreceived() );
//    component.set('user_location', thelocale(I18n) );
    component.set('something_new', new_test(args) );
  }
}