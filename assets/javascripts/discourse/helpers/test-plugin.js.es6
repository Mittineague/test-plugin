import { registerUnbound } from 'discourse-common/lib/helpers';
registerUnbound('user_like_count', function(params) {
  const currentUser = api.getCurrentUser();
  var user_like_count = currentUser.id;
  console.log(params);
  return new Handlebars.SafeString(user_like_count);
});