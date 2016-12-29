
var log_info = (function() {
  if (node.parentNode) {
    console.log("got node " + node.parentNode.nodeName);
  } else {
    console.log("No Node");
  }
}());

export default {
  setupComponent(args, component) {
    component.set('user_nick_name', 'Ginger');
    component.set('user_like_count', 362436);
    component.set('user_gender', 'female');
    component.set('user_age', 21);
    component.set('user_location', 'island');
  }
}