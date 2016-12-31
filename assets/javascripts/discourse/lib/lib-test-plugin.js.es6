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

export function theuserid(Discourse) {
  var thename = themembername();
  var theid = 0;
  if (thename != 'fail') {
    var thenamelower = thename.toLowerCase();
    var theuserobj = Discourse.User.find_by_username(thenamelower);
    if (typeof theuserobj != null) {
      theuserobjid = theuserobj.id;
      if (typeof theuserobjid != null) {
        theid = theuserobjid;
      } else {
        theid = 99;
      }
    } else {
      theid = 88;
    }
  } else {
    theid = 77;
  }
  return theid;
}