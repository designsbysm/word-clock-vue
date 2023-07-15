<script setup lang="ts">
import { ref } from "vue";
import { useDark } from "@vueuse/core";

import { getRandomGrid, getWordGrid } from "./library/grid";
import GridRow from "./components/Grid-Row.vue";

const wordGrid = ref<string[][]>(getWordGrid());
const randomGrid = getRandomGrid();

useDark();
setInterval(() => {
  wordGrid.value = getWordGrid();
}, 60000);
</script>

<template>
  <main class="app">
    <div class="grid">
      <GridRow
        v-for="(row, index) in wordGrid"
        :active="row"
        :inactive="randomGrid[index]"
        :key="index"
      />
    </div>
  </main>
</template>

<style>
body {
  background: #fff;
  color: #ddd;
  font-family: "Source Code Pro", monospace;
  font-size: 16px;
  font-weight: 300;
  margin: 0;
}

.dark body {
  background: #000;
  color: #333;
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
