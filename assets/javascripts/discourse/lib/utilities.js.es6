export function thecurrentuser(Discourse) {
  var username = Discourse.User.currentProp('username') || "anon";
  return username;
}

export function thelocale(I18n) {
  var internationalization = {};
  var localesetting = "pl";
  if (I18n) {
    internationalization = I18n;
    if (typeof internationalization != null) {
      localesetting = internationalization.locale || "pt";
    } else {
      localesetting = "fr";
    }
  } else {
    localesetting = "de";
  }
  return localesetting;
}