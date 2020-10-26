require("dotenv").config();

// This is an example of a API key file.
// Copy this to apikey.js in the same directory and replace the placeholders with appropriate values.
var prod = {
  baseUrl: "https://cad.onshape.com",
  accessKey: process.env.ONSHAPE_ACCESS_KEY,
  secretKey: process.env.ONSHAPE_SECRET_KEY,
};

module.exports = prod;
