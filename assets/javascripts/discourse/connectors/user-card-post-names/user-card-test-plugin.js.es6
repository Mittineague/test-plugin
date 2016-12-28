// import { registerUnbound } from 'discourse-common/lib/helpers';

export default {
//  setupComponent(args, component, registerUnbound) {
  setupComponent(args, component) {
/*
    registerUnbound('user_nick_name', function() {
      var user_nick_name = new Handlebars.SafeString('Guiseppe');
      return user_nick_name;
    });
    registerUnbound('user_like_count', function() {
      var user_like_count = new Handlebars.SafeString(9999);
      return user_like_count;
    });
  Ember.Helper.helper('user_gender', function() {
    return "male";
  });
*/
    component.set('user_nick_name', 'Marianne');
    component.set('user_like_count', 362436);
  }
}