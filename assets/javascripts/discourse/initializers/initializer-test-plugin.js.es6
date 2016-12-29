import { withPluginApi } from 'discourse/lib/plugin-api';

function priorToApi(container) {
/*
Nothing to see here
*/
};

function initializePlugin(api) {
/*
Nothing to see here
*/
};

export default {
  name: 'test-plugin',
  initialize(container) {
    withPluginApi('0.1', api => initializePlugin(api), { noApi: priorToApi(container) });
  }
};