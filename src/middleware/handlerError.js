const handlerError = ( err, req, res, next) => {
   const statusCode = res.status === 200? 500 : res.statusCode
   res.status(statusCode).json({error:err.message})
}

module.exports = handlerError

