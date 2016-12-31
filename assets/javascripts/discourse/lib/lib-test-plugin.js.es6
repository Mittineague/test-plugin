export function thecurrentuser(Discourse) {
  var username = Discourse.User.currentProp('username') || "anon";
  return username;
}

export function thelocale(I18n) {
  var localesetting = I18n.locale || "none";
  return localesetting;
}
href="/users/adminguy1"
export function thenode() {
  var anode = document.querySelector('div#user-card div.card-content div.user-card-avatar a');
  var nodename = "starters";
  var hrefval = "na";
  var lastslashpos = 0;
  if (typeof anode != null) {
   hrefval = anode.getAttribute('href');
   if (typeof hrefval != null) {
     lastslashpos = hrefval.lastIndexOf('/');
     nodename = hrefval.substr(lastslashpos);
   }
  } else {
   nodename = "bummer";
  }
  return nodename;
}