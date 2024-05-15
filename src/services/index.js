// this file will server api requests.

const BASE_URL = "https://lms-api.swatitech.com";

export const getRequest = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`);
  return response;
};

export const postRequest = async (endPoint, data) => {
  return await fetch(`${BASE_URL}${endPoint}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const updateRequest = async (endpoint, data) => {
  return await fetch(`${BASE_URL}${endpoint}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
