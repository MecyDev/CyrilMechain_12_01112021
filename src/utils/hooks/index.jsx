import { useQuery } from "react-query";
import UserDataService from "../../services/userDataFetch";

/**
 * Get the user informaton
 * @param { integer } id Id of the user
 * @return { object }
 */
export const useFetchUserInfos = (id) => {
  return useQuery(["userInfos", { id }], () =>
    UserDataService.getUserInfos(id)
  );
};

/**
 * Get the user activity
 * @param { integer } id Id of the user
 * @return { object }
 */
export const useFetchUserActivity = (id) => {
  return useQuery(["userActivity", { id }], () =>
    UserDataService.getUserActivity(id)
  );
};

/**
 * Get the user average sessions
 * @param { integer } id Id of the user
 * @return { object }
 */
export const useFetchUserAverageSessions = (id) => {
  return useQuery(["userAverageSessions", { id }], () =>
    UserDataService.getUserAverageSessions(id)
  );
};

/**
 * Get the user performance
 * @param { integer } id Id of the user
 * @return { object }
 */
export const useFetchUserPerformance = (id) => {
  return useQuery(["userPerformance", { id }], () =>
    UserDataService.getUserPerformance(id)
  );
};
