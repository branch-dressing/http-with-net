module.exports = rawRequest => {
    let splitRequest = rawRequest.split(' ');

    return {
        method: splitRequest[0],
        path: splitRequest[1],
    }
};
