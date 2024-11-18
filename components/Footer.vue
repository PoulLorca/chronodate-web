<template>
  <footer class="footer">
    <button class="footer-button" :class="{ shake: githubShake }" @click="goToGitHub">
      GitHub
    </button>
    <button class="footer-button" :class="{ shake: blueskyShake }" @click="goToBluesky">
      Bluesky
    </button>
  </footer>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const goToGitHub = () => {
  window.open('https://github.com/PoulLorca/bluesky-chronodate', '_blank');
};

const goToBluesky = () => {
  window.open('https://bsky.app/profile/poullorca.bsky.social', '_blank');
};

const githubShake = ref(false);
const blueskyShake = ref(false);

let shakeIntervalId: number;

onMounted(() => {
  shakeIntervalId = window.setInterval(() => {
    const buttons = ['github', 'bluesky'];
    const buttonToShake = buttons[Math.floor(Math.random() * buttons.length)];

    if (buttonToShake === 'github') {
      githubShake.value = true;
      setTimeout(() => {
        githubShake.value = false;
      }, 500);
    } else if (buttonToShake === 'bluesky') {
      blueskyShake.value = true;
      setTimeout(() => {
        blueskyShake.value = false;
      }, 500);
    }
  }, 10000);
});

onBeforeUnmount(() => {
  clearInterval(shakeIntervalId);
});
</script>

<style scoped>
.footer {  
  width: 100%;
  text-align: center;
  margin-top: auto;
}

.footer-button {
  margin: 0 1rem;
  padding: 0.8rem 1.5rem;
  font-family: Rocketron;
  font-size: 1rem;
  color: #fff;
  background: linear-gradient(45deg, #0057ff, #00d4ff);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.2s;
}

.footer-button:hover {
  transform: scale(1.05);
}

/* Shake animation */
@keyframes shake {
  0% {
    transform: translateX(0);
  }
  15% {
    transform: translateX(-5px);
  }
  30% {
    transform: translateX(5px);
  }
  45% {
    transform: translateX(-5px);
  }
  60% {
    transform: translateX(5px);
  }
  75% {
    transform: translateX(-5px);
  }
  100% {
    transform: translateX(0);
  }
}

.shake {
  animation: shake 0.5s;
}
</style>