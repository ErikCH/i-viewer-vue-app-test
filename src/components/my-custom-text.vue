<script setup lang="ts">
const props = defineProps<{
  customText?: string;
}>();
</script>
<template>
  <h3>{{ props.customText }}</h3>
</template>

<style>
h3 {
  font-size: 3rem;
  color: blue;
}
</style>
