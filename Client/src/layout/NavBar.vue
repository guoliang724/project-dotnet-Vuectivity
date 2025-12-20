<template>
  <v-app-bar :elevation="4" class="app-bar">
    <template v-slot:image>
      <v-img gradient="135deg,#182a73 0%,#218aae 69%,#20a7ac 89%"></v-img>
    </template>
    <template v-slot:prepend>
      <v-icon color="white" class="ml-6" icon="mdi-account-multiple"></v-icon>
    </template>

    <v-app-bar-title class="title-color">Vuetivity</v-app-bar-title>

    <nav class="nav-bar">
      <router-link to="/">Home</router-link>
      <router-link to="/activity">Activities</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <v-btn class="mr-6" color="primary" rounded="sm" variant="elevated">
      Create Activity
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.app-bar {
  position: relative;
}
.title-color {
  color: white;
}

.nav-bar {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-evenly;
  color: white;
  font-size: 16px;
}
</style>
