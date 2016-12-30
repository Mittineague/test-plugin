export function thecurrentuser(Discourse) {
  var username = Discourse.User.currentProp('username') || "anon";
  return username;
}

export function thelocale(Discourse) {
  var settings = {};
  var localesetting = "pl";
  if (Discourse) {
    settings = Discourse.SiteSettings;
    if (typeof settings != null) {
      localesetting = settings.locale || "es";
    } else {
      localesetting = "fr";
    }
  } else {
    localesetting = "de";
  }
  return localesetting;
}