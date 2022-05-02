const  sentiment = require('multilang-sentiment')

const analyse = async (tweet) =>{
    console.log(tweet)
    const result = sentiment(tweet, "es")
    console.log(result);
}

module.exports = analyse