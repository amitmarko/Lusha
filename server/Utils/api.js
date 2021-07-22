const axios = require('axios');

const IMAGES_URL = 'https://api.jonathanczyzyk.com/api/v1/images/small'
const IMAGES_HEADER = { "x-api-key": "api-key-7991a47c-f27e-408b-b992-51f53454f401" }

exports.getImages = () => axios.get(IMAGES_URL, { headers: IMAGES_HEADER })
