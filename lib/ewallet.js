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

Ewallet.prototype.setAuthorization = function (authorization) {
    this.api.defaults.headers.Authorization = authorization;
}

//Util
Ewallet.prototype.OMGAdmin = function (user_id, authentication_token) {
    return "OMGAdmin " + Buffer.from(user_id + ":" + authentication_token).toString('base64');
}

Ewallet.prototype.OMGClient = function (api_key, authentication_token) {
    return "OMGClient " + Buffer.from(api_key + ":" + authentication_token).toString('base64');
}

//Admin Session
//Resources related to admin session tokens.
Ewallet.prototype.adminLogin = function (data) {
    return this.api.post('/admin/admin.login', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.meLogout = function () {
    this.api.defaults.headers.Authorization = '';
    return this.api.post('/admin/me.logout')
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.authTokenSwitchAccount = function (data) {
    return this.api.post('/admin/auth_token.switch_account', data)
        .then(function (res) {
            return res.data
        })
}



//Admin
//Resources related to admin users.
Ewallet.prototype.adminAll = function (data) {
    return this.api.post('/admin/admin.all',data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.adminGet = function (data) {
    return this.api.post('/admin/admin.get', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.meGet = function () {
    return this.api.post('/admin/me.get')
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.meGetAccount = function () {
    return this.api.post('/admin/me.get_account')
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.meGetAccounts = function () {
    return this.api.post('/admin/me.get_accounts')
        .then(function (res) {
            return res.data
        })
}

//UserSession
//Resources related to user session tokens.



//User
//Resources related to users.
Ewallet.prototype.userAll = function (data) {
    return this.api.post('/admin/user.all', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.userGet = function (data) {
    return this.api.post('/admin/user.get', data)
        .then(function (res) {
            return res.data
        })
}


//Token
//Resources related to tokens.
Ewallet.prototype.tokenAll = function (data) {
    return this.api.post('/admin/token.all', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.tokenGet = function (data) {
    return this.api.post('/admin/token.get', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.tokenStats = function (data) {
    return this.api.post('/admin/token.stats', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.tokenGetMints  = function (data) {
    return this.api.post('/admin/token.get_mints', data)
        .then(function (res) {
            return res.data
        })
}




//ExchangePair
//Resources related to exchange pairs.



//Category
//Resources related to categories.



//Account
//Resources related to accounts.
Ewallet.prototype.accountAll = function (data) {
    return this.api.post('/admin/account.all', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.accountGet = function (data) {
    return this.api.post('/admin/account.get', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.accountCreate = function (data) {
    return this.api.post('/admin/account.create', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.accountUpdate = function (data) {
    return this.api.post('/admin/account.update', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.accountUploadAvatar = function (data) {
    return this.api.post('/admin/account.upload_avatar', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.accountAssignUser = function (data) {
    return this.api.post('/admin/account.assign_user', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.accountUnassignUser = function (data) {
    return this.api.post('/admin/account.unassign_user', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.getMembers = function (data) {
    return this.api.post('/admin/get_members', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.accountGetUsers = function (data) {
    return this.api.post('/admin/account.get_users', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.accountGetDescendants = function (data) {
    return this.api.post('/admin/account.get_descendants', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.accountGetWallets = function (data) {
    return this.api.post('/admin/account.get_wallets', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.accountGetTransactions = function (data) {
    return this.api.post('/admin/account.get_transactions', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.accountGetTransactionRequests = function (data) {
    return this.api.post('/admin/account.get_transaction_requests', data)
        .then(function (res) {
            return res.data
        })
}
Ewallet.prototype.accountGetTransactionConsumptions = function (data) {
    return this.api.post('/admin/account.get_transaction_consumptions', data)
        .then(function (res) {
            return res.data
        })
}


//Wallet
//Resources related to wallets.



//Transaction
//Resources related to transactions.



//TransactionRequest
//Resources related to the creation of transaction requests (either receiving or sending) that needs to be consumed by another user.



//TransactionConsumption
//Resources related to consumption of transaction requests.





//API Access
//Resources related to API access.
Ewallet.prototype.accessKeyAll  = function (data) {
    return this.api.post('/admin/access_key.all', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.accessKeyCreate  = function () {
    return this.api.post('/admin/access_key.create')
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.accessKeyUpdate  = function (data) {
    return this.api.post('/admin/access_key.update', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.accessKeyDelete  = function (data) {
    return this.api.post('/admin/access_key.delete', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.apiKeyAll  = function (data) {
    return this.api.post('/admin/api_key.all', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.apiKeyCreate  = function () {
    return this.api.post('/admin/api_key.create')
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.apiKeyUpdate  = function (data) {
    return this.api.post('/admin/api_key.update', data)
        .then(function (res) {
            return res.data
        })
}

Ewallet.prototype.apiKeyDelete  = function (data) {
    return this.api.post('/admin/api_key.delete', data)
        .then(function (res) {
            return res.data
        })
}

//Setting
Ewallet.prototype.settingsAll  = function () {
    return this.api.post('/admin/settings.all')
        .then(function (res) {
            return res.data
        })
}

module.exports = Ewallet;
