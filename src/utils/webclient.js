import axios from "axios";
import config from "./config";

const apiClient = axios.create({
  baseURL: config.BASE_URL,
  headers: config.HEADER,
  timeout: 5000
})

export const create = async (endpoint, props) =>  {
  /*
   * This method allows to post  API
   */
  try {
    const response = await apiClient.post(endpoint, props);
    return response
  } catch (error) {
    // console.error("Error Create webcleint:: ", error);
    return error
  }
}


export const fetch = async (endpoint) => {
  /*
   * This method allows to get or fetch API
   */
  try {
    const response = apiClient.get(endpoint);
    return response
  } catch (error) {
    console.error("Error Create webcleint:: ", error);
    return error
  }
}

