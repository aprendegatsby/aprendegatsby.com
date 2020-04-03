const axios = require("axios");

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const params = querystring.parse(event.body);
  try {
    const resp = await axios.post(
      `https://api.convertkit.com/v3/forms/1242653/subscribe`,
      {
        ...event.body,
        api_key: `PFViSeCgq4EwZvgzgUmGtQ`,
      }
    );

    return {
      statusCode: 200,
      body: `${event.body.first_name} with email ${event.body.email} was subscribed successfully!`,
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify(err, null, 2),
    };
  }
};
