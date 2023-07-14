<script setup lang="ts">
import { inject } from "vue";

const props = defineProps<{
  cell: number;
  row: number;
}>();

const wordGrid = inject("wordGrid") as string[][];
const randomGrid = inject("randomGrid") as string[][];

const wordCell = wordGrid[props.row][props.cell];
const randomCell = randomGrid[props.row][props.cell];
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
