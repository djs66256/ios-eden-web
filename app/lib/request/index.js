/**
 * Created by daniel on 16/5/12.
 */

'use strict';

import superagent from 'superagent';

const baseUrl = 'http://localhost:3000';

export function request(param) {
    return new Promise(function (resolve, reject) {
        let req = new superagent.Request(param.method || 'GET', baseUrl + param.url);
        req.query(param.data);
        req.accept(param.accept);

        req.end(function (err, response) {
            if (err) {
                reject(err);
            }
            else {
                resolve(response.body);
            }
        })
    });
}

export function jsonRequest(param) {
    param.type = superagent.types.json;
    param.accept = 'application/json';
    return request(param);
}