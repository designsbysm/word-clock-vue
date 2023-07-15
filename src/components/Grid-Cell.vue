<script setup lang="ts">
const props = defineProps<{
  active: string;
  inactive: string;
}>();
</script>

<template>
  <div class="cell" :class="{ active: !!props.active }">
    {{ props.active || props.inactive }}
  </div>
</template>

<style scoped>
@media (prefers-color-scheme: light) {
  .active {
    color: #000;
  }
}

@media (prefers-color-scheme: dark) {
  .active {
    color: #fff;
  }
}

.cell {
  grid-row: auto / auto;
  justify-content: center;
  display: grid;
  justify-items: stretch;
}
</style>
