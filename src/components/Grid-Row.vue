<script setup lang="ts">
import GridCell from "./Grid-Cell.vue";

const props = defineProps<{
  activeCells: string[];
  inactiveCells: string[];
}>();
</script>

<template>
  <div class="row">
    <GridCell
      v-for="(cell, index) in props.activeCells"
      :activeCell="cell"
      :inactiveCell="props.inactiveCells[index]"
      :key="index"
    />
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
