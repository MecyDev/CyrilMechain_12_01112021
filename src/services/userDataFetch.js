/**
 * This file uses the Axios library to make all API calls.
 */
import axios from "axios";

import userDataFormat from "./formatUserDataFetch";

/**
 * The config object for axios calls
 * @param { string } baseURL The URL of the API
 * @param { object } headers
 * @return { Object }
 */
const apiClient = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    "content-type": "application/json",
  },
});

/**
 * Calls the API route for get user generals informations
 * @param { Integer } id Id of the user
 * @return { Object }
 */
const getUserInfos = async (id) => {
  const response = await apiClient.get(`/user/${id}`);
  return response.data;
};

/**
 * Calls the API route for get user activity datas
 * @param { Integer } id Id of the user
 * @return { Object }
 */
const getUserActivity = async (id) => {
  const response = await apiClient.get(`user/${id}/activity`);
  const formatResponse = userDataFormat.formatUserActivity(
    response.data.data.sessions
  );
  return formatResponse;
};

/**
 * Calls the API route for get user average sessions datas
 * @param { Integer } id Id of the user
 * @return { Object }
 */
const getUserAverageSessions = async (id) => {
  const response = await apiClient.get(`user/${id}/average-sessions`);
  const formatResponse = userDataFormat.formatUserAverageSessions(
    response.data.data.sessions
  );
  return formatResponse;
};

/**
 * Calls the API route for get user performances datas
 * @param { Integer } id Id of the user
 * @return { Object }
 */
const getUserPerformance = async (id) => {
  const response = await apiClient.get(`user/${id}/performance`);
  const formatResponse = userDataFormat.formatUserPerformance(
    response.data.data
  );
  return formatResponse;
};

/**
 * Contain all datas return by the functions
 * @type { object }
 */
const UserDataService = {
  getUserInfos,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
};

export default UserDataService;
