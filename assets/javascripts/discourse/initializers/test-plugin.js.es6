import { registerUnbound } from 'discourse-common/lib/helpers';
import { withPluginApi } from 'discourse/lib/plugin-api';

function priorToApi(container) {
/*
Nothing to see here
*/
};

function initializePlugin(api, registerUnbound) {
  Handlebars.registerHelper({
    user_nick_name: function() {
    },
    user_like_count: function() {
    }
  });
  registerUnbound('user_like_count', function() {
    var user_nick_name = new Handlebars.SafeString('Guiseppe');
    var user_like_count = new Handlebars.SafeString(9999);
    return user_nick_name, user_like_count;
  });
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