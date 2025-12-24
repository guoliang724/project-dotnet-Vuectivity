<template>
  <v-container class="d-flex">
    <v-col cols="8"><ActivityList /></v-col>
    <v-col cols="4"><ActivityDetail :activity="activityStore.currentActivity"/></v-col>
  </v-container>
</template>

<script setup lang="ts">
  import {useActivityStore} from "@/store";
import ActivityDetail from "./ActivityDetail.vue";
import ActivityList from "./ActivityList.vue";


const activityStore = useActivityStore();

</script>

<style scoped></style>
