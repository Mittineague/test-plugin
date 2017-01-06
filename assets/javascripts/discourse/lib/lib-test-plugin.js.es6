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

export function theuserlikesreceived() {
  var thename = themembername();
  var likesreceived = 0;
  $.ajax({
     url: "/users/" + thename + "/summary.json",
     dataType: 'json',
     async: false,
     success: function(data) {
       likesreceived = data.user_summary.likes_received;
     },
     error: function(e) {
       likesreceived = null;
     }
   });
   return likesreceived;
}

export function log_args_component(args, component) {
  console.log(typeof args);
  if (typeof args === 'object') {
    for (var aprop in args) {
      console.log("args." + aprop + " = " + args[aprop]);
    }
  }
  console.log(typeof component);
  if (typeof component === 'object') {
    for (var cprop in component) {
      console.log("component." + cprop + " = " + component[cprop]);
    }
  }
  return "logs";
}