import { registerUnbound } from 'discourse-common/lib/helpers';
import { withPluginApi } from 'discourse/lib/plugin-api';

function priorToApi(container) {
}

function initializePlugin(api) {
    name: 'test-plugin';
    registerUnbound('test-plugin', function() {
        var user_like_count = 99;
        return new Handlebars.SafeString(user_like_count);
    });
}

export default {
    initialize() {
        withPluginApi('0.1', api => initializePlugin(api), { noApi: () => priorToApi() });
    }
}