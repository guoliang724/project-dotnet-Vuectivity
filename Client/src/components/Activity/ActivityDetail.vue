<template>
  <v-card class="mt-5" width="400px" variant="elevated" v-if="activity">
    <v-img
      height="300px"
      cover
      :src="`public/images/${activity.category}.jpg`"
    ></v-img>
    <v-card-title>{{ activity.title }}</v-card-title>
    <v-card-subtitle>{{ activity.date }}</v-card-subtitle>
    <v-card-text>{{ activity.description }}</v-card-text>
    <v-card-actions>
      <v-btn variant="elevated" color="primary">Edit</v-btn>
      <v-btn variant="flat" color="secondary">Cancel</v-btn>
    </v-card-actions>
  </v-card>
  <div v-else>sss</div>
</template>

<script setup lang="ts">
import type { IActivity } from "../../types/activity";
const props = defineProps<{ activity: IActivity | null }>();
</script>

<style scoped></style>
