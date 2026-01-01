<template>
  <v-container class="d-flex">
    <v-col cols="8"><ActivityList /></v-col>
    <v-col cols="4" class="mt-5"
      ><ActivityDetail
        v-if="isActivityEnabled"
        :activity="activityStore.currentActivity"
      />
      <ActivityForm v-else-if="isEditFormEnable" />

      <div v-else></div>
    </v-col>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useActivityStore } from "@/store";
import ActivityDetail from "./ActivityDetail.vue";
import ActivityList from "./ActivityList.vue";
import ActivityForm from "./ActivityForm.vue";

const activityStore = useActivityStore();
const isActivityEnabled = computed(() => activityStore.isActivityEnabled);
const isEditFormEnable = computed(() => activityStore.isEditForm);
</script>

<style scoped></style>
