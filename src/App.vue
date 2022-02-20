<script setup lang="ts">
import coinTracker from "./components/coin-tracker.ce.vue";
import erikVue from "./components/erik.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <h3>hi</h3>
      <erik-vue></erik-vue>
      <coin-tracker :pair="'SOL-USD'" :background="'yellow'">
        <template v-slot:header>
          <h3>Header</h3>
        </template>
        <template v-slot:footer>
          <h3>Footter</h3>
        </template>
      </coin-tracker>
    </div>
  </header>
</template>
