import { defineStore } from "pinia";
import { type IActivity } from "../types/activity";

export const useActivityStore = defineStore("activity", {
  state: () => ({
    currentActivity: null as IActivity | null,
  }),
  actions: {
    setCurrentActivity(activity: IActivity) {
      this.currentActivity = activity;
    },
    clearCurrentActivity() {
      this.currentActivity = null;
    },
  },
});
