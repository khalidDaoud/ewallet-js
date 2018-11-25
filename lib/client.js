const axios = require('axios');

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

Ewallet.prototype.setAuthorization = function (authorization) {
    this.api.defaults.headers.Authorization = authorization;
}

//Session
//Resources related to session tokens.
Ewallet.prototype.meLogout = function () {
    return this.api.post('/admin/me.logout')
        .then(function (res) {
            this.api.defaults.headers.Authorization = '';
            return res.data
        })
}

//User
//Resources related to users. A user is an entity uniquely identified by its provider_user_id which is the user id in the provider database.
Ewallet.prototype.meGet = function () {
    return this.api.post('/client/me.get')
        .then(function (res) {
            return res.data
        })
}


//Wallet
//Resources related to wallets of a specific user. Wallets contains the balances of tokens that users and accounts own.
Ewallet.prototype.meGetWallets = function () {
    return this.api.post('/client/me.get_wallets')
        .then(function (res) {
            return res.data
        })
}



//Transaction
//Resources related to transactions.
Ewallet.prototype.meGetTransactions = function (data) {
    return this.api.post('/client/me.get_transactions', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.meCreateTransaction = function (data) {
    return this.api.post('/client/me.create_transaction', data)
        .then(function (res) {
            return res.data
        })
}

//TransactionRequest
//Resources related to the creation of transaction requests (either receiving or sending) that needs to be consumed by another user.
Ewallet.prototype.meCreateTransactionRequest = function (data) {
    return this.api.post('/client/me.create_transaction_request', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.meGetTransactionRequest = function (data) {
    return this.api.post('/client/me.get_transaction_request', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.meConsumeTransactionRequest = function (data) {
    return this.api.post('/client/me.consume_transaction_request', data)
        .then(function (res) {
            return res.data
        })
}

//TransactionConsumption
//Resources related to consumption of transaction requests.
Ewallet.prototype.meApproveTransactionConsumption = function (data) {
    return this.api.post('/client/me.approve_transaction_consumption', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.meRejectTransactionConsumption = function (data) {
    return this.api.post('/client/me.reject_transaction_consumption', data)
        .then(function (res) {
            return res.data
        })
}

//Setting
//Resources related to global settings of the wallet.
Ewallet.prototype.meGetSettings = function () {
    return this.api.post('/client/me.get_settings')
        .then(function (res) {
            return res.data
        })
}

module.exports = Ewallet;