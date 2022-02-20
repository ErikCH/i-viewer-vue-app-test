<script setup lang="ts">
import SpecialUploader from "./components/special-uploader.ce.vue";
import coinTracker from "./components/coin-tracker.vue";
const randomImg = "https://source.unsplash.com/random";
</script>

<template>
  <header>
    <div class="wrapper">
      <h3>hi</h3>
      <coin-tracker :pair="'SOL-USD'" :background="'yellow'">
        <template v-slot:header>
          <h3>Header</h3>
        </template>
        <template v-slot:footer>
          <h3>Footter</h3>
        </template>
      </coin-tracker>
      <!-- <special-uploader /> -->
    </div>
  </header>
</template>

<style>
h3 {
  color: purple;
}
.image-uploader {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid gray;
  width: 55%;
  background-color: seashell;
  margin: 0 auto;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
h3 {
  font-size: 3rem;
  color: green;
}

.your-file {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

img {
  width: 25%;
}
</style>
