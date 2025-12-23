import { type IActivity } from "./../types/activity";
import http from "./index";

const getActivityList = async () => {
  return http.get<IActivity[]>("/activities");
};

export { getActivityList };
