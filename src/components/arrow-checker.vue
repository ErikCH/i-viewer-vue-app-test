<script lang="ts">
import { onMounted, ref } from "vue";
export const last = ref(null);
</script>

<script lang="ts" setup>
const props = defineProps<{
  amount: number;
}>();
const showUp = ref(true);
const showArrows = ref(false);

showUp.value = props.amount > last.value;
if (last.value && props.amount !== last.value) {
  showArrows.value = true;
}

onMounted(() => {
  last.value = props.amount;
});
</script>
<template>
  <div v-if="showArrows">
    <svg
      v-if="showUp"
      class="up"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 330 330"
      style="enable-background: new 0 0 330 330"
      xml:space="preserve"
    >
      <path
        d="m325.606 229.393-150.004-150a14.997 14.997 0 0 0-21.213.001l-149.996 150c-5.858 5.858-5.858 15.355 0 21.213 5.857 5.857 15.355 5.858 21.213 0l139.39-139.393 139.397 139.393A14.953 14.953 0 0 0 315 255a14.95 14.95 0 0 0 10.607-4.394c5.857-5.858 5.857-15.355-.001-21.213z"
      />
    </svg>
    <svg
      v-else
      class="down"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 330 330"
      style="enable-background: new 0 0 330 330"
      xml:space="preserve"
    >
      <path
        d="M325.607 79.393c-5.857-5.857-15.355-5.858-21.213.001l-139.39 139.393L25.607 79.393c-5.857-5.857-15.355-5.858-21.213.001-5.858 5.858-5.858 15.355 0 21.213l150.004 150a14.999 14.999 0 0 0 21.212-.001l149.996-150c5.859-5.857 5.859-15.355.001-21.213z"
      />
    </svg>
  </div>
</template>

<style>
svg {
  width: 30px;
}
.up {
  fill: green;
}
.down {
  fill: red;
}
</style>
