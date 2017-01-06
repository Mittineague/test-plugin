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

export function new_test(args) {
  return args.username.toLowerCase();
}
/*
args.username = Henry
args.avatar_template = /user_avatar/localhost/henry/{size}/119_1.png
args.last_posted_at = 2016-12-23T03:13:08.112Z
args.last_seen_at = 2017-01-03T19:12:25.940Z
args.created_at = 2016-04-23T07:57:31.221Z
*/