<script setup lang="ts">
import NavBar from "./layout/NavBar.vue";
import { VueQueryDevtools } from "@tanstack/vue-query-devtools";
</script>

<template>
  <v-layout>
    <NavBar />

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
  <VueQueryDevtools :initial-is-open="false" />
</template>

<style scoped></style>
