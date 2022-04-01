const { TwitterApi } = require('twitter-api-v2');


// Instanciate with desired auth type (here's Bearer v2 auth)
const client = new TwitterApi({
    appKey: process.env.API_KEY,
    appSecret: process.env.API_KEY_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    accessSecret: process.env.ACCESS_TOKEN_SECRET,
});

// Tell typescript it's a readonly app
const roClient = client.readOnly;


module.exports = roClient
