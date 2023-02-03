import axios from "axios";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const makeRequest = axios.create({
  baseURL: publicRuntimeConfig.API_URL,
  headers: {
    Authorization: "Bearer " + publicRuntimeConfig.TOKEN,
  },
});

export default makeRequest;
