<script setup lang="ts">
import NavBar from "./layout/NavBar.vue";
</script>

<template>
  <v-layout>
    <NavBar />

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<style scoped></style>
