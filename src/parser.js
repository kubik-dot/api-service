// parser.js

const cheerio = require('cheerio');
const axios = require('axios');

class Parser {
  async parse(url) {
    try {
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);
      return $.html();
    } catch (error) {
      throw new Error(`Error parsing URL: ${url}`);
    }
  }
}

module.exports = Parser;