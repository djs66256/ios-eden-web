/**
 * Created by daniel on 16/5/13.
 */

var Router = require('./lib/prerender/Router');
const routes = new Router();

routes.get('/*', function (params) {
    return new Promise((resolve, reject) => {
        return resolve('');
    })
});

module.exports = routes;
