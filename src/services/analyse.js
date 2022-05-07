const sentiment = require('multilang-sentiment')

const analyse = (tweets) => {
   
   const analysedTweets =  tweets.map(tweet => {
        const result = sentiment(tweet.message, "es", {
            'words': {
                'gracias':5,
                'top': 5,
                '🔥':5,
                '👍':5,
                '⚡':3,
                '🥰':5
            }
        })
        console.log(result)
        return {message: tweet.message,
        state: result.category
        }
        
    })
  
    return analysedTweets
  
}

module.exports = analyse