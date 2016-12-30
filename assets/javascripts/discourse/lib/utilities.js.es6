export function thecurrentuser(Discourse) {
  var user = {};
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

export function thelocale(Discourse) {
  var settings = {};
  var localesetting = "pl";
  if (Discourse) {
    settings = Discourse.SiteSettings;
    if (typeof settings != null) {
      localesetting = settings.basic.default_locale.default || "br";
    } else {
      localesetting = "fr";
    }
  } else {
    localesetting = "de";
  }
  return localesetting;
}