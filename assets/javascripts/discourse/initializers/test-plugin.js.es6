import { registerUnbound } from 'discourse-common/lib/helpers';
import { withPluginApi } from 'discourse/lib/plugin-api';

function priorToApi(container) {
}

function initializePlugin(api) {
    user_like_count: '99',
    registerUnbound('user_like_count', function(user_like_count) {
        let user_like_count = user_like_count;
        return new Handlebars.SafeString(user_like_count);
    });
//    return new Handlebars.SafeString(user_like_count);
}

export default {
    initialize() {
        withPluginApi('0.1', api => initializePlugin(api), { noApi: () => priorToApi() });
    }
}