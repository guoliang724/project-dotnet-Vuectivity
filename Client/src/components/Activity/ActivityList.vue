<template>
  <div v-if="!isLoading">
    <v-list lines="two">
      <v-list-item v-for="activity in activities" :key="activity.id">
        <ActivityCard :activity="activity" />
      </v-list-item>
    </v-list>
  </div>
  <div v-else>loading</div>
</template>

<script setup lang="ts">
import { getActivityList } from "../../api/activity";
import ActivityCard from "./ActivityCard.vue";
import { useQuery } from "@tanstack/vue-query";

const {
  data: activities,
  isLoading,
  isPending,
} = useQuery({
  queryKey: ["activities"],
  queryFn: getActivityList,
});


</script>

<style scoped></style>
