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



    //Admin All
    var data  = {
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
    var result = await ewallet.userAll();
    var users = result.data.data;

    //User Get
    var data = {
        "id": users[0].id
    }    

    var result = await ewallet.userGet(data);

    //Token All
    var result = await ewallet.tokenAll();
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
        "id": tokens[0].id
    }   

    var result = await ewallet.tokenGetMints(data);  

    //Access Key All
    var data  = {
        "page": 1,
        "per_page": 10,
        "search_term": "",
        "sort_by": "created_at",
        "sort_dir": "desc"
      }

    var result = await ewallet.accessKeyAll(data);  

    //Access Key Create
    //var result = await ewallet.accessKeyCreate();  
    

    //Api Key All
    var data  = {
        "page": 1,
        "per_page": 10,
        "search_term": "",
        "sort_by": "created_at",
        "sort_dir": "desc"
    }

    var result = await ewallet.apiKeyAll(data);

    //API Key Create
    //var result = await ewallet.apiKeyCreate();





    console.log(result);


    //Setting All
    var result = await ewallet.settingsAll();  

    
    //Logout
    //await ewallet.meLogout()

}

main()