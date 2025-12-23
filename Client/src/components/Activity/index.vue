<template>
  <v-container class="d-flex">
    <v-col cols="8"><ActivityList /></v-col>
    <v-col cols="4"><ActivityDetail /></v-col>
  </v-container>
</template>

<script setup lang="ts">
import ActivityDetail from "./ActivityDetail.vue";
import ActivityList from "./ActivityList.vue";
</script>

<style scoped></style>
