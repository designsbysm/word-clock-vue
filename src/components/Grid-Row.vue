<script setup lang="ts">
import GridCell from "./Grid-Cell.vue";

const props = defineProps<{
  active: string[];
  inactive: string[];
}>();
</script>

<template>
  <div class="row">
    <GridCell
      v-for="(cell, index) in props.active"
      :active="cell"
      :inactive="props.inactive[index]"
      :key="index"
    />
  </div>
</template>

<style lang="scss" scoped>
.row {
  grid-column: auto / auto;
  align-content: center;
  align-items: stretch;
  display: grid;
  display: grid;
  grid-template-columns: repeat(13, 1fr);
}
</style>
