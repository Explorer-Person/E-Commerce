const sendResponse = (status, process, message) =>(req,res,next) => {
    res.status(status).json({
        status: status,
        process: `${process}`,
        message: `${message}`,
    })
} 

module.exports = {sendResponse};