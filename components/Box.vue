<template>
  <div
    class="box"
    :class="{ 'active': isActive }"
  ></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const isActive = ref(false);

onMounted(() => {
  setInterval(() => {
    isActive.value = Math.random() > 0.5; 
  }, 1000); 
});
</script>

<style scoped>
.box {
  width: 50px;
  height: 50px;
  transition: background-color 1s ease;
  border: 1px solid rgba(76, 175, 80, 0.3);
  background-color: rgba(76, 175, 80, 0.1);
}

.box.active {
  background-color: rgba(76, 175, 80, 0.2);
}
</style>
