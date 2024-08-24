
// Custom error handling middleware
const errorHandler = (status, process, message) => (err, req, res, next) => {
    console.log(err);
    res.status(status).json({
        status: status,
        process: `${process}`,
        message: `${message}`
    });
};



module.exports = {errorHandler};