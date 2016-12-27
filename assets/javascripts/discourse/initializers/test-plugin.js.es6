// import UserCardController from 'discourse/controllers/user-card';
import { withPluginApi } from 'discourse/lib/plugin-api';

function priorToApi(container) {
};

function initializePlugin(api) {
};

export default {
  name: 'test-plugin',
  initialize(container) {
/*    UserCardController.reopen({
      user_like_count: '77'
    }); */
  withPluginApi('0.1', api => initializePlugin(api), { noApi: priorToApi(container) });
  }
};