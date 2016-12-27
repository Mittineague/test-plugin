import { registerUnbound } from 'discourse-common/lib/helpers';
import { withPluginApi } from 'discourse/lib/plugin-api';

function priorToApi(container) {
    var user_like_count = 99;
    return new user_like_count;
}

function initializePlugin(api) {
    registerUnbound('user_like_count', function() {
        var user_like_count = 99;
        return new Handlebars.SafeString(user_like_count);
    });
}

export default {
    name: 'test-plugin';
    initialize() {
        withPluginApi('0.1', api => initializePlugin(api), { noApi: () => priorToApi() });
    }
}