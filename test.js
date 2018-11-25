Ewallet = require("./index.js");
ewallet = new Ewallet("http://160.16.137.244:4000/api");

async function main() {

    var data = {
        "email": "ts@block-base.co",
        "password": "sandboxv1"
    }

    var result = await ewallet.adminLogin(data);
    console.log(result)
}

main()