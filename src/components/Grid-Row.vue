<script setup lang="ts">
import GridCell from "./Grid-Cell.vue";

const props = defineProps<{
  cells: string[];
  row: number;
}>();
</script>

<template>
  <div class="row">
    <GridCell v-for="(cell, index) in props.cells" :key="index" :cell="index" :row="props.row" />
  </div>
</template>

<style scoped>
.row {
  grid-column: auto / auto;
  align-content: center;
  align-items: stretch;
  display: grid;
  display: grid;
  grid-template-columns: repeat(13, 1fr);
}
</style>
