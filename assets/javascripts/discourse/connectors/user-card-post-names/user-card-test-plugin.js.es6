import { thecurrentuser,
         log_args_component,
         themembername,
         theuserlikesreceived,
         thelocale} from 'discourse/plugins/test-plugin/discourse/lib/lib-test-plugin';

export default {
  shouldRender(args, component) {
     return component.siteSettings.test_plugin_enabled;
  },
  setupComponent(args, component) {
//    component.set('user_nick_name', thecurrentuser(Discourse) );
    component.set('user_like_count', log_args_component(args, component);
//    component.set('user_gender', themembername() );
//    component.set('user_age', theuserlikesreceived() );
//    component.set('user_location', thelocale(I18n) );
  }
}