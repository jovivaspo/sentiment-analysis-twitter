const sentiment = require('multilang-sentiment')

const analyse = (tweets) => {
   
   const analysedTweets =  tweets.map(tweet => {
        const result = sentiment(tweet.message, "es")
        return {message: tweet.message,
        state: result.category
        }
        
    })
  
    return analysedTweets
  
}

module.exports = analyse