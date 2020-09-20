const config = {
    "ownerID": "713831710885806125", //kendi IDınızı yazınız
    "admins": [""],
    "support": [""],
    "token": "", //botunuzun tokenini yazınız
    "dashboard" : {
      "oauthSecret": "", //botunuzun secretini yazınız
      "callbackURL": `callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
      "sessionSecret": "", //kalsın
      "domain": "", //site URLnizi yazınız!
          "port": process.env.PORT
    }
  };
  
  module.exports = config;
