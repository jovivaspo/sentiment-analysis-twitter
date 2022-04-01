const client = require('../services/configTwitter')

const ctrUser = {}

ctrUser.search = async (req,res,next) =>{
    try{
        const username = req.params.username
        const user = await client.v2.userByUsername(username)
        console.log(user)
        res.status(200).json({
            name:user.data.name,
            username:user.data.username
        })

    }catch(err){
        console.log(err)
    }
}

ctrUser.analyse = async (req,res,next) => {
    try{

        res.status(200).send("Analysing")

    }catch(err){
        console.log(err)
    }
}

module.exports = ctrUser

