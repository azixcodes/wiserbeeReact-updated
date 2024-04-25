// this file will server api requests.

const BASE_URL = "https://lms-api.swatitech.com";

export const getRequest = async (endpoint) => {};

export const postRequest = async (endPoint, data) => {
  console.log(`${BASE_URL}${endPoint}`);
  return await fetch(`${BASE_URL}${endPoint}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
