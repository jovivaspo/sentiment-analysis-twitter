
const ctrUser = {}

ctrUser.search = async (req,res,next) =>{
    try{

        res.status(200).json({
            user:"Nobody"
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

