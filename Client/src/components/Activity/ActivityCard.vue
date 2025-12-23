<template>
  <div>activity card</div>
</template>

<script setup lang="ts">
import { type IActivity } from "../../types/activity";
const props = defineProps<{ activity: IActivity }>();

console.log("aaa", props.activity);
</script>

<style scoped></style>
