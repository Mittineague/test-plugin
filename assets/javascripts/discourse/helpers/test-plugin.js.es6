import { registerUnbound } from 'discourse-common/lib/helpers';

registerUnbound('user_nick_name', function() {
  var user_nick_name = new Handlebars.SafeString('Rodrigo');
  return user_nick_name;
});
registerUnbound('user_like_count', function() {
  var user_like_count = 1234567;
  return new Handlebars.SafeString(user_like_count);
});

