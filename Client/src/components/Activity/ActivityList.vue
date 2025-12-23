<template>
  <v-list lines="two">
    <v-list-item v-for="activity in activities" :key="activity.id">
      <ActivityCard :activity="activity" />
    </v-list-item>
  </v-list>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

import { getActivityList } from "../../api/activity";
import ActivityCard from "./ActivityCard.vue";
import type { IActivity } from "../../types/activity";
const activities = ref<IActivity[]>([]);

onMounted(() => {
  const getActivities = async () => {
    const result = await getActivityList();

    activities.value = result;
  };

  getActivities();
});
</script>

<style scoped></style>
