const axios = require("axios");
const querystring = require("querystring");

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const params = querystring.parse(event.body);
  console.log("exports.handler -> params", params);

  try {
    const resp = await axios.post(
      `https://api.convertkit.com/v3/forms/1242653/subscribe`,
      {
        ...params,
        api_key: `PFViSeCgq4EwZvgzgUmGtQ`,
      }
    );

    return {
      statusCode: 200,
      body: `${params.first_name} with email ${params.email} was subscribed successfully!`,
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify(err, null, 2),
    };
  }
};
