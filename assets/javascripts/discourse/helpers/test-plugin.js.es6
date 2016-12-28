import { registerUnbound } from 'discourse-common/lib/helpers';
registerUnbound('user_like_count', function(params) {
  var user_like_count = 1234567;
  console.log(params);
  return new Handlebars.SafeString(user_like_count);
});