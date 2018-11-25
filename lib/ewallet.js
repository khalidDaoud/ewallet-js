const axios = require('axios');

function Ewallet(host, auth) {

    const headers = {
        'accept': 'application/vnd.omisego.v1+json',
        'Content-Type': 'application/vnd.omisego.v1+json',
        'Authorization': auth
    };

    const api = axios.create({
        baseURL: host,
        headers: headers,
        responseType: 'json'
    });

    this.api = api;

}

function Ewallet(host) {

    const headers = {
        'accept': 'application/vnd.omisego.v1+json',
        'Content-Type': 'application/vnd.omisego.v1+json',
        'Authorization': ""
    };

    const api = axios.create({
        baseURL: host,
        headers: headers,
        responseType: 'json'
    });

    this.api = api;

}


Ewallet.prototype.OMGAdmin = function (data) {
    return "OMGAdmin " + Buffer.from(data.user_id + ":" + data.authentication_token).toString('base64');
}

Ewallet.prototype.OMGClient = function (data) {
    return "OMGClient " + Buffer.from(data.api_key + ":" + data.authentication_token).toString('base64');
}

Ewallet.prototype.adminLogin = function (data) {
    return this.api.post('/admin/admin.login', data)
        .then(function (res) {
            return res.data
        })
}

module.exports = Ewallet;
