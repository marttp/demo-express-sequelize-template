const generateResponseObject = (isSuccess, httpStatus, data = '') => {
    const prototype = {
        success: isSuccess,
        code: httpStatus,
    };

    return isSuccess ? { ...prototype, data: data } : prototype;
};

module.exports = {
    generateResponseObject
};