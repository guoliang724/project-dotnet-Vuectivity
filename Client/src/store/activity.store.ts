import { defineStore } from "pinia";
import { type IActivity } from "../types/activity";

export const useActivityStore = defineStore("activity", {
  state: () => ({
    currentActivity: null as IActivity | null,
    isEditForm: false,
  }),
  getters: {
    isActivityEnabled: (state) => {
      return state.currentActivity !== null;
    },
    isFormEnabled: (state) => {
      return state.isEditForm;
    },
  },
  actions: {
    getCurrentActivity() {
      return this.currentActivity;
    },
    setCurrentActivity(activity: IActivity) {
      this.currentActivity = activity;
      this.isEditForm = false;
    },
    clearCurrentActivity() {
      this.currentActivity = null;
    },
    setOpenEditForm() {
      this.isEditForm = true;
      this.currentActivity = null;
    },
    setCloseEditForm() {
      this.isEditForm = false;
    },
  },
});
