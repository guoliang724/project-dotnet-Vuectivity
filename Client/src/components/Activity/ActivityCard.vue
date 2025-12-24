<template>
  <v-card variant="elevated" color="primary">
    <template v-slot:title>{{ activity.title }}</template>
    <template v-slot:subtitle>{{ activity.date }}</template>
    <template v-slot:text>
      <div class="d-flex flex-column ga-1">
        <div>{{ activity.description }}</div>
        <div>{{ activity.city }}</div>
      </div>
    </template>
    <template v-slot:actions>
      <v-chip color="warning" label>
        <v-icon icon="mdi-label" start></v-icon> Tags</v-chip
      >
      <v-spacer />
      <v-btn
        variant="elevated"
        color="warning"
        @click="() => handleView(activity)"
      >
        <template v-slot:prepend>
          <v-icon icon="mdi-eye-outline" />
        </template>
        View
      </v-btn>
    </template>
  </v-card>
</template>

<script setup lang="ts">
import { type IActivity } from "../../types/activity";
const props = defineProps<{ activity: IActivity }>();
import { useActivityStore } from "@/store";

const activityStore = useActivityStore();

const handleView = (activity: IActivity) => {
  activityStore.setCurrentActivity(activity);
};
</script>

<style scoped></style>
