export function thecurrentuser(Discourse) {
  var username = Discourse.User.currentProp('username') || "anon";
  return username;
}

export function thelocale(I18n) {
  var localesetting = I18n.locale || "none";
  return localesetting;
}

export function thenode() {
  var anode = document.querySelector('div#user-card div.card-content div.user-card-avatar a');
  var nodename = "starters";
  if (typeof anode != null) {
   nodename = anode.getAttribute('href');
  } else {
   nodename = "bummer";
  }
  return nodename;
}