import { registerUnbound } from 'discourse-common/lib/helpers';
registerUnbound('user_like_count', function(params) {
//Ember.Handlebars.helper('test-plugin', function(param) {
	var user_like_count = 99;
/*
	$.ajax({
  url: "/users/" + params + "/summary.json",
  dataType: 'json',
  async: false,
  success: function(data) {
  	target = data.user_summary.likes_received;
  }
});
*/
	return new Handlebars.SafeString(user_like_count);
});