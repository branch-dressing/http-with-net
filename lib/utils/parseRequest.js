module.exports = rawRequest => {
    console.log(rawRequest);
    let splitRequest = rawRequest.split(' ');
    const parsedRequest = {
        method: splitRequest[0],
        path: splitRequest[1]
    };
    if(rawRequest.match(/{*}/g)) parsedRequest.body = splitRequest[(splitRequest.length - 1)]; 

    return parsedRequest;
};
