<template>
<div class="background">
    <div class="grid-container">
      <div
        v-for="row in rows"
        :key="`row-${row}`"
        class="grid-row"
      >
        <Box v-for="col in cols" :key="`col-${col}`" />
      </div>
    </div>
</div>
</template>
  
  <script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue';
  import Box from '~/components/Box.vue';
  
  const boxSize = 50; // Tamaño del cubo en píxeles
  
  const rows = ref(0);
  const cols = ref(0);
  
  const calculateGridSize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
  
    cols.value = Math.ceil(width / boxSize);
    rows.value = Math.ceil(height / boxSize);
  };
  
  onMounted(() => {
    calculateGridSize();
    window.addEventListener('resize', calculateGridSize);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('resize', calculateGridSize);
  });
  </script>
  
  <style scoped>
  .background {
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
  }
  
  .grid-container {
    display: flex;
    flex-direction: column;
  }
  
  .grid-row {
    display: flex;
  }
  </style>
  