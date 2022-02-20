<script lang="ts" setup>
import { toRefs } from "vue";
import ArrowChecker from "./arrow-checker.vue";

const props = defineProps<{
  coin: {
    money: number;
    formatted: string;
    name: string;
  };
}>();

const { coin } = toRefs(props);
</script>
<template>
  <Transition mode="out-in">
    <div class="inner" :key="coin.formatted">
      {{ coin.name }}

      <div class="price-info">
        <span>{{ coin.formatted }}</span>
        <arrow-checker :amount="coin.money ?? 0"></arrow-checker>
      </div>
    </div>
  </Transition>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
