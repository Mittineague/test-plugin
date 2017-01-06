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
  var item = component;
  console.log(typeof item);
  if (typeof item === 'object') {
    for (var prop in item) {
      if (typeof item[prop] === 'undefined') {
        console.log(prop + " = undefined");
      }
      if (typeof item[prop] === 'string') {
        console.log(prop + " = " + item[prop]);
      }
      if (typeof item[prop] === 'number') {
        console.log(prop + " = " + item[prop]);
      }
      if (typeof item[prop] === 'boolean') {
        console.log(prop + " = boolean");
      }
      if (typeof item[prop] === 'function') {
        console.log(prop + " = function");
      }
      if (typeof item[prop] === 'object') {
        for (var subprop in item[prop]) {
          if (typeof item[prop][subprop] === 'string') {
            console.log(subprop + " = " + item[prop][subprop]);
          } else {
            console.log(typeof item[prop][subprop]);
          }
        }
      }
    }
  } else {
    console.log(typeof item);
  }
  return "logs";
}
/*
args.username = Henry
args.avatar_template = /user_avatar/localhost/henry/{size}/119_1.png
args.last_posted_at = 2016-12-23T03:13:08.112Z
args.last_seen_at = 2017-01-03T19:12:25.940Z
args.created_at = 2016-04-23T07:57:31.221Z
*/