import UserCardController from 'discourse/controllers/user-card';
import { withPluginApi } from 'discourse/lib/plugin-api';

function priorToApi(container) {
};

function initializePlugin(api) {
  name: 'test-plugin',

  initialize(container) {
    UserCardController.reopen({
      user_like_count: '987'
    });
  }
};

export default {
  name: 'test-plugin',
  initialize() {
    withPluginApi('0.1', initializePlugin, { noApi: priorToApi });
  }
};