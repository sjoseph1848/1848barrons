// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const axios = require('axios');
require('dotenv').config();

const handler = async (event) => {
  const API_SECRET = process.env.NEWS_API_SECRET;
  const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_SECRET}`;

  try {
    const { data } = await axios.get(url);
    console.log('made it');
    return {
      statusCode: 200,
      body: JSON.stringify(data.articles),
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
