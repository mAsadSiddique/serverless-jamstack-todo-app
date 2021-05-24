const axios = require('axios');
require("dotenv").config()
const { GET_LINKS } = require("./utils/linkQueries.js");
const sendQuery = require("./utils/sendQuery");
const formattedResponse = require("./utils/formattedResponse");


exports.handler = async (event) => {

    try {
        const result = await sendQuery(GET_LINKS);
        const data = result.allLinks.data;

        return formattedResponse(200, data)
    }
    catch (error) {
        console.log(error)
        return formattedResponse(500, { error: "Something Went Wrong..." })
    }


}