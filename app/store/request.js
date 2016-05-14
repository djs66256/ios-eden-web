/**
 * Created by daniel on 16/5/13.
 */

import { jsonRequest } from '../lib/request'

function myJsonRequest(params) {
    return new Promise((resolve, reject) => {
        jsonRequest(params).then((data) => {
            if (!data.code) {
                reject(new Error('数据错误'));
            }
            if (data.code == -2) {
                reject(new Error());
            }
            else {
                resolve(data);
            }
        }).catch(reject);
    });
}

export default {
    'jsonRequest': myJsonRequest
};