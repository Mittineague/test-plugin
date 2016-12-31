export function thecurrentuser(Discourse) {
  var username = Discourse.User.currentProp('username') || "anon";
  return username;
}

export function thelocale(I18n) {
  var localesetting = I18n.locale || "none";
  return localesetting;
}

export function thenode() {
  var node = document.querySelector{'.mitt-test-plugin'};
  var nodename = "starters";
  if (typeof node != null) {
   nodename = "got node";
  } else {
   nodename = "bummer";
  }
  return nodename;
}