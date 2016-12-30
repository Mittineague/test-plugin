import { currentuser } from 'discourse/plugins/test-plugin/discourse/lib/utilities';

export default {
  setupComponent(args, component) {
    component.set('user_nick_name', currentuser() );
    component.set('user_like_count', 362436);
    component.set('user_gender', 'female');
    component.set('user_age', 21);
    component.set('user_location', 'island');
  }
}