export function thecurrentuser(Discourse) {
  var username = Discourse.User.currentProp('username') || "anon";
  return username;
}

export function thelocale(I18n) {
  var localesetting = I18n.locale || "none";
  return localesetting;
}

export function themembername() {
  var anode = document.querySelector('div#user-card div.card-content div.user-card-avatar a');
  var thename = "starters";
  var hrefval = "na";
  var lastslashpos = 0;
  if (typeof anode != null) {
    hrefval = anode.getAttribute('href');
    if (typeof hrefval != null) {
      lastslashpos = hrefval.lastIndexOf('/');
      thename = hrefval.substr(lastslashpos +1);
    }
  } else {
    thename = "bummer";
  }
  return thename;
}

export function theuserid(Discourse) {
  var thename = themembername();
  var thenamelower = thename.toLowerCase();
  var theid = Discourse.User.find_by_username_or_email(username_lower: thenamelower);
  return theid;
}