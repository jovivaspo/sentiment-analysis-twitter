const client = require('../services/configTwitter')
const calculateDate = require('../services/calculateDate')
const analyse = require('../services/analyse')


const ctrUser = {}

ctrUser.search = async (req, res, next) => {
    try {
        const username = req.params.username
        const user = await client.v2.userByUsername(username, { 'user.fields': ['created_at', 'profile_image_url', 'public_metrics'] })
       // console.log(user)
        res.status(200).json({
            id: user.data.id,
            name: user.data.name,
            username: user.data.username,
            createdAt: user.data.created_at,
            avatar: user.data.profile_image_url,
            metrics: user.data.public_metrics
        })

    } catch (err) {
        console.log(err)
        res.status(500)
        const error = new Error('Error al buscar usuario')
        next(error)
    }
}

ctrUser.tweets = async (req, res, next) => {
    try {
        const id = req.params.id
       
        const {start_time, end_time} = calculateDate(req.params.time)

        //console.log(start_time, end_time)

        const tweetsOfUser = await client.v2.userTimeline(id, {
            'start_time': start_time.toISOString(),
            'end_time':end_time.toISOString()
        })
        
        let tweetsUser = []

        for await (const fetchTweetUser of tweetsOfUser) {

          /*  if(tweetsUser.length >= 30){
                break
            }*/
           
            tweetsUser.push({
                message:fetchTweetUser.text,
                state:null
            })

        }

       // console.log("Nº de tweets del usuario: ", tweetsUser.length)

        res.status(200).json({
            tweets: tweetsUser
        })

    } catch (err) {
        console.log(err)
        res.status(500)
        const error = new Error('Error al recopilar tweets')
        next(error)
    }
}

ctrUser.analyse = async (req,res,next) => {
    try{
        const {tweets} = req.body
        const results = analyse(tweets)
        res.status(200).json({
            tweets: results
        })
        
    }catch(err){
        console.log(err)
        res.status(500)
        const error = new Error('Error al analizar')
        next(error)
    }
}


module.exports = ctrUser
