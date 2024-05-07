

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const numberOfIntegers = Math.floor(Math.random() * 12) + 6;
    const randomIntegers = []
    for (let i = 0; i < numberOfIntegers; i++) {
        randomIntegers.push(Math.floor(Math.random() * 100));
    }
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
        //  },
        //json string with random integers
        body: JSON.stringify(`"integers": ${randomIntegers.toString()}`),
    };
};
