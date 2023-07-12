<script setup lang="ts">
import { getRandomGrid, getWordGrid } from "./library/grid";

console.log(getRandomGrid());
console.log(getWordGrid());
</script>

<template>
  <main class="app" />
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

.active {
  color: #fff;
}

.cell {
  grid-row: auto / auto;
  justify-content: center;
  display: grid;
  justify-items: stretch;
}
.grid {
  display: grid;
  font-size: 5vmin;
  grid-template-rows: repeat(8, 1fr);
  height: 90vmin;
  margin: 5vmin;
  width: 90vmin;
}

.row {
  grid-column: auto / auto;
  align-content: center;
  align-items: stretch;
  display: grid;
  display: grid;
  grid-template-columns: repeat(13, 1fr);
}
</style>
