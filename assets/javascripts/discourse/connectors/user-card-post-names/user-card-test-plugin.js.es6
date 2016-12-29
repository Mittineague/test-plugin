
var log_info = (function() {
  var node = document.querySelector('div.mitt-test-plugin');
  if (typeof node.parentNode != null) {
//    console.log("got node " + node.parentNode.nodeName);
    console.log("got parentNode");
  } else {
    console.log("No parentNode");
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