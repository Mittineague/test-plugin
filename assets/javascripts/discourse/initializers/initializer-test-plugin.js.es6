import { withPluginApi } from 'discourse/lib/plugin-api';

function priorToApi(container) {
/*
Nothing to see here
*/
};

function initializePlugin(api, Ember) {
  Ember.Helper.helper('user_gender', function() {
    return "male";
  });
};

export default {
  name: 'test-plugin',
  initialize(container) {
    withPluginApi('0.1', api => initializePlugin(api, Ember), { noApi: priorToApi(container) });
  }
};