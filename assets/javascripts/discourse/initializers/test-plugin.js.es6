import { withPluginApi } from 'discourse/lib/plugin-api';

function priorToApi(container)
{
}

function initializePlugin(api)
{
/*
  const user_like_count = 777;
  return user_like_count;
*/
}

export default {
  name: 'test-plugin',
  initialize: function() {
    withPluginApi('0.1', api => initializePlugin(api), { noApi: () => priorToApi() });
  }
}