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
  var thename = "fail";
  var hrefval = "na";
  var lastslashpos = 0;
  if (typeof anode != null) {
    hrefval = anode.getAttribute('href');
    if (typeof hrefval != null) {
      lastslashpos = hrefval.lastIndexOf('/');
      thename = hrefval.substr(lastslashpos +1);
    }
  } else {
    thename = "fail";
  }
  return thename;
}

export function theuserid(User) {
  var thename = themembername();
  var theid = 99;
  if (thename != 'fail') {
//    var thenamelower = thename.toLowerCase();
    var theuserjsonobj = User.findByUsername(thename);
    if (typeof theuserjsonobj != null) {
      theid = theuserjsonobj.id || 99;
    }
  }
  return theid;
}