<script setup lang="ts">
import type { Ref } from "vue";
import { computed, inject } from "vue";

const props = defineProps<{
  cell: number;
  row: number;
}>();

const wordCell = computed(() => {
  const grid = inject("wordGrid") as Ref<string[][]>;

  return grid.value[props.row][props.cell];
});

const randomCell = computed(() => {
  const grid = inject("randomGrid") as string[][];

  return grid[props.row][props.cell];
});
</script>

<template>
  <div class="cell" :class="{ active: !!wordCell }">{{ wordCell || randomCell }}</div>
</template>

<style scoped>
.active {
  color: #fff;
}

.cell {
  grid-row: auto / auto;
  justify-content: center;
  display: grid;
  justify-items: stretch;
}
</style>
