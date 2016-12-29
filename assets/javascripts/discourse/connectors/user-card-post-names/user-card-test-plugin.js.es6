
var log_info = (function() {
    console.log("hey, it works");
  }());

export default {
  setupComponent(args, component) {
    component.set('user_nick_name', 'Ginger');
    component.set('user_like_count', 362436);
    component.set('user_gender', 'female');
    component.set('user_age', 21);
    component.set('user_location', 'island');
  }
}