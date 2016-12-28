import { registerUnbound } from 'discourse-common/lib/helpers';
import { withPluginApi } from 'discourse/lib/plugin-api';

function priorToApi(container) {
/*
  var user_like_count = 11223344;
  return new Handlebars.SafeString(user_like_count);
*/
console.log("prior " + container);
};

function initializePlugin(api, registerUnbound) {
/*
  registerUnbound('user_like_count', function() {
    var user_like_count = 987654321;
    return new Handlebars.SafeString(user_like_count);
  });
*/
console.log("with " + api);
};

export default {
  name: 'test-plugin',
  initialize(container) {
/*    UserCardController.reopen({
      user_like_count: '77'
    }); */
  withPluginApi('0.1', api => initializePlugin(api, registerUnbound), { noApi: priorToApi(container) });
  }
};