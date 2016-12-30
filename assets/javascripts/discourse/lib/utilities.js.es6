import { withPluginApi } from 'discourse/lib/plugin-api';

export function currentuser(api) {
  var user = "";
  var username = "Ginger";
  if (api) {
    user = api.getCurrentUser();
    if (typeof user != null) {
      username = user.get('username');
    }
  }
  return username;
}