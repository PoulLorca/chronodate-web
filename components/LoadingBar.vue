<template>    
    <UMeter :value="progressValue" :max="100" class="loading-bar" indicator>
    <template #label="{ percent }">
      <p class="text-sm">
        {{ progressValue.toFixed(6) }}% of the year has passed
      </p>
    </template>
    </UMeter>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const progressValue = ref(0);

function getYearProgress(): number{
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const endOfYear = new Date(now.getFullYear() + 1, 0, 1);
    const elapsed = now.getTime() - startOfYear.getTime();
    const total = endOfYear.getTime() - startOfYear.getTime();
    const progress = (elapsed / total) * 100;
    return progress;
}

let intervalId: number;

const updateProgress = () => {
    progressValue.value = getYearProgress();
}

onMounted(() => {
  updateProgress();
  intervalId = window.setInterval(updateProgress, 1000); //Update every second
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.loading-bar {  
  width: 80%;
  margin-bottom: 2rem;
}

.text-sm{
    font-family: Rocketron;
}
</style>
