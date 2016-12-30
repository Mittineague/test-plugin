// import { withPluginApi } from 'discourse/lib/plugin-api';

export function currentuser(Discourse) {
  var user = "";
  var username = "Ginger";
  if (Discourse) {
    user = Discourse.User;
    if (typeof user != null) {
      username = user.currentProp('username');
    } else {
      username = "Gilligan";
    }
  } else {
    username = "Skipper";
  }
  return username;
}