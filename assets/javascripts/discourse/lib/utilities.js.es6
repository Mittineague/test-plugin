import { withPluginApi } from 'discourse/lib/plugin-api';

export function currentuser(api) {
  var user = api.getCurrentUser().get('username') || "Ginger";
  return user;
}