/**
 * Created by daniel on 16/5/13.
 */
'use strict';

var Layer = require('./Layer');

class Router {
    constructor() {
        this._layers = [];
    }

    get(url, callback) {
        let layer = new Layer(url, {}, callback);
        this._layers.push(layer);
    }

    handle(url) {
        return new Promise((resolve, reject) => {
            for (let layer of this._layers) {
                if (layer.match(url)) {
                    layer.handle(layer.params).then((data) => {
                        resolve(data);
                    }).catch(()=>{
                        reject();
                    });
                    return;
                }
            }
            reject();
        })
    }
}

module.exports = Router;