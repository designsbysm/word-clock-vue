<script setup lang="ts">
import { provide } from "vue";
import { getRandomGrid, getWordGrid } from "./library/grid";

import GridRow from "./components/Grid-Row.vue";

const wordGrid = getWordGrid();
const randomGrid = getRandomGrid();

provide("wordGrid", wordGrid);
provide("randomGrid", randomGrid);
</script>

<template>
  <main class="app">
    <div class="grid">
      <GridRow v-for="(row, index) in wordGrid" :key="index" :cells="row" :row="index" />
    </div>
  </main>
</template>

<style>
body {
  background: #000;
  color: #333;
  font-family: "Source Code Pro", monospace;
  font-size: 16px;
  font-weight: 300;
  margin: 0;
}

.app {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: -webkit-fill-available;
  place-content: center;
  align-items: center;
}

.grid {
  display: grid;
  font-size: 5vmin;
  grid-template-rows: repeat(8, 1fr);
  height: 90vmin;
  margin: 5vmin;
  width: 90vmin;
}
</style>
