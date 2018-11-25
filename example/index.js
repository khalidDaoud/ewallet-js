Ewallet = require("../index.js");

ewallet = new Ewallet("http://160.16.137.244:4000/api");

async function main() {

    //Admin Login
    var data = {
        "email": "ts@block-base.co",
        "password": "sandboxv1"
    }

    var result = await ewallet.adminLogin(data);

    //Get Auth Token
    var user_id = result.data.user_id;
    var authentication_token = result.data.authentication_token;

    //Get Admin Authorization
    var result = ewallet.OMGAdmin(user_id, authentication_token)
    var adminAuthorization = result;

    //Set Admin Authorization
    ewallet.setAuthorization(adminAuthorization);

    //Auth Token Switch Account

    var data = {
        "accound_id": ''
    }

    var result = await ewallet.authTokenSwitchAccount(data);

    //Admin All
    var data = {
        "page": 1,
        "per_page": 10,
        "search_term": "",
        "sort_by": "created_at",
        "sort_dir": "desc"
    }

    var result = await ewallet.adminAll(data);
    var admins = result.data.data;

    //Admin Get
    var data = {
        "id": admins[0].id
    }

    var result = await ewallet.adminGet(data);




    //Me Get
    var result = await ewallet.meGet();

    //Me Get Account
    var result = await ewallet.meGetAccount();

    //Me Get Accounts
    var result = await ewallet.meGetAccounts();

    //Use All
    var data = {
        "page": 1,
        "per_page": 10,
        "search_term": "",
        "sort_by": "created_at",
        "sort_dir": "desc"
    }

    var result = await ewallet.userAll(data);
    var users = result.data.data;

    //User Get
    var data = {
        "id": users[0].id
    }

    var result = await ewallet.userGet(data);

    //Token All

    var data = {
        "page": 1,
        "per_page": 10,
        "search_term": "",
        "sort_by": "created_at",
        "sort_dir": "desc"
    }

    var result = await ewallet.tokenAll(data);
    var tokens = result.data.data;

    //Token Get
    var data = {
        "id": tokens[0].id
    }

    var result = await ewallet.tokenGet(data);

    //Token Stat
    var data = {
        "id": tokens[0].id
    }

    var result = await ewallet.tokenStats(data);

    //Token Get Mints
    var data = {
        "id": tokens[0].id,
        "page": 1,
        "per_page": 10,
        "search_term": "",
        "sort_by": "field_name",
        "sort_dir": "asc"
    }

    var result = await ewallet.tokenGetMints(data);


    //Account
    //Resources related to accounts.


    //Account All
    var data = {
        "page": 1,
        "per_page": 10,
        "search_term": "",
        "sort_by": "field_name",
        "sort_dir": "asc"
    }

    var result = await ewallet.accountAll(data);
    var id = result.data.data[0].id;
    console.log(result)

    //Account Get
    var data = {
        "id": id
    }

    var result = await ewallet.accountGet(data);
    console.log(result)    

    //Account Create    
    var data = {
        "name": "Account Name",
        "description": "The account description",
        "parent_id": id,
        "category_ids": [],
        "metadata": {},
        "encrypted_metadata": {}
      }

    var result = await ewallet.accountCreate(data);
    console.log(result)  

    //Account Update
    var data = {
        "id": id,
        "name": "Account Name 2",
        "description": "The account description 2",
        "category_ids": [],
        "metadata": {},
        "encrypted_metadata": {}
      }    



    //API Access
    //Resources related to API access.

    //Access Key All
    var data = {
        "page": 1,
        "per_page": 10,
        "search_term": "",
        "sort_by": "created_at",
        "sort_dir": "desc"
    }

    var result = await ewallet.accessKeyAll(data);

    //Access Key Create
    var result = await ewallet.accessKeyCreate();
    var id = result.data.id;

    //Access Key Update
    var data = {
        "id": id,
        "expired": true
    }

    var result = await ewallet.accessKeyUpdate(data);

    //Access Key Delete
    var data = {
        "id": id,
    }

    var result = await ewallet.accessKeyDelete(data);

    //Api Key All
    var data = {
        "page": 1,
        "per_page": 10,
        "search_term": "",
        "sort_by": "created_at",
        "sort_dir": "desc"
    }

    var result = await ewallet.apiKeyAll(data);

    //API Key Create
    var result = await ewallet.apiKeyCreate();
    var id = result.data.id;

    var data = {
        "id": id,
        "expired": true
    }

    var result = await ewallet.apiKeyUpdate(data);

    var data = {
        "id": id,
    }

    var result = await ewallet.apiKeyDelete(data);


    //Setting
    //Setting All
    var result = await ewallet.settingsAll();


    //Logout
    await ewallet.meLogout()

}

main()