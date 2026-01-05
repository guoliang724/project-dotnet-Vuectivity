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
import ActivityCard from "./ActivityCard.vue";
import { useActivities } from "@/hooks/useActivities";

const { isLoading, activities } = useActivities();
</script>

<style scoped></style>
