import { type IActivity } from "./../types/activity";
import http from "./index";

const getActivityList = async () => {
  return http.get<IActivity[]>("/activities");
};

const createActivity = async (activity: IActivity) => {
  return http.post<IActivity>("/activities", activity);
};

export { getActivityList, createActivity };
