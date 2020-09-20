const config = {
    "ownerID": "713831710885806125", //kendi IDınızı yazınız
    "admins": [""],
    "support": [""],
    "token": "NzU1MzE3NjcyODMyNjYzNjMy.X2BiZg.EabmoAjV5wpSvVY-3snAVEL0obs", //botunuzun tokenini yazınız
    "dashboard" : {
      "oauthSecret": "bOPKExCWkJs3PWSm9GwBlQpLL7EbLiyj", //botunuzun secretini yazınız
      "callbackURL": `callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
      "sessionSecret": "", //kalsın
      "domain": "", //site URLnizi yazınız!
          "port": process.env.PORT
    }
  };
  
  module.exports = config;