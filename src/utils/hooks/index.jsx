import { useQuery } from "react-query";
import UserDataService from "../../services/userDataFetch";

export const useFetchUserInfos = (id) => {
  return useQuery(["userInfos", { id }], () =>
    UserDataService.getUserInfos(id)
  );
};

export const useFetchUserActivity = (id) => {
  return useQuery(["userActivity", { id }], () =>
    UserDataService.getUserActivity(id)
  );
};

export const useFetchUserAverageSessions = (id) => {
  return useQuery(["userAverageSessions", { id }], () =>
    UserDataService.getUserAverageSessions(id)
  );
};

export const useFetchUserPerformance = (id) => {
  return useQuery(["userPerformance", { id }], () =>
    UserDataService.getUserPerformance(id)
  );
};
