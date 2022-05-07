export const API_URL =
  process.env.REACT_APP_API_URL || "http://45.94.255.112:8080";

export const getAPIUrl = () => {
  return `${API_URL}`;
};

const newTokenApiEndpoint = API_URL + "/api/v1/user/token/refresh";

const getApis = {
  API_URL,
  newTokenApiEndpoint,
};

export default getApis;
