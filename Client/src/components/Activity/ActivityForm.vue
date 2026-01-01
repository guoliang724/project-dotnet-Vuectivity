<template>
  <v-sheet class="mx-auto">
    <v-form fast-fail @submit.prevent="handleSubmit">
      <v-text-field
        v-model="title"
        :rules="titleRules"
        label="Title"
        variant="outlined"
      ></v-text-field>
      <v-textarea label="Description" variant="outlined"></v-textarea>
      <v-text-field label="Category" variant="outlined"></v-text-field>
      <v-text-field label="Date" type="date" variant="outlined"></v-text-field>
      <v-text-field label="City" variant="outlined"></v-text-field>
      <v-text-field label="Venue" variant="outlined"></v-text-field>
      <v-btn class="mt-2" type="submit" :loading="loading" block>Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup lang="ts">
import { ref } from "vue";

const loading = ref(false);

const title = ref("");
const titleRules = [(v: any) => !!v || v?.length >= 3 || "Title is required"];

const handleSubmit = async (event: SubmitEvent) => {
  loading.value = true;

  const result = await event;

  console.log("result", result);
  loading.value = false;
};
</script>

<style scoped lang="scss"></style>
