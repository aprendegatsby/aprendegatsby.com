const axios = require("axios");

exports.handler = async (event) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const params = JSON.parse(event.body);

  try {
    // const resp = await axios.post(
    //   `https://api.convertkit.com/v3/forms/1242653/subscribe`,
    //   {
    //     ...params,
    //     api_key: `PFViSeCgq4EwZvgzgUmGtQ`,
    //   }
    // );

    await axios({
      method: "post",
      url: `https://api.formik.com/submit/aprendegatsbycom/landing`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        name: params.first_name,
        email: params.email,
      },
    });

    return {
      statusCode: 200,
      body: `${params.first_name} with email ${params.email} was subscribed successfully!`,
    };
  } catch (err) {
    console.log("error => ", err);
    return {
      statusCode: 400,
      body: JSON.stringify(err, null, 2),
    };
  }
};
