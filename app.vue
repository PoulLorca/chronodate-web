<template>
  <div class="app-container" :data-theme="isDarkTheme ? 'dark' : 'light'">
    <Background />        
    <div class="content-container">
      <h1 class="title">CronoDate⏳</h1>
      <LoadingBar />
      <button class="follow-button" @click="followOnBlueSky">
        <img src="~/assets/images/You Rock Hand devil horns 3D pixel icon.svg" alt="">
        Follow on BlueSky
      </button>      
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const isDarkTheme = ref(false);

onMounted(()=>{
  //Check for dark theme preference on component mount
  if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
    isDarkTheme.value = true;
  }

  //Listen for changes in theme preference
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) =>{
    isDarkTheme.value = event.matches;
  });
});

const followOnBlueSky = () => {
  window.open('https://bsky.app/profile/chronodate.bsky.social', '_blank')
};

</script>

<style>
.app-container {
  position: relative;
  display: flex;
  flex-direction: column;
  /*width: 100%;*/
  min-height: 100vh;
  overflow: hidden;
  transition: background-color 0.3s ease;  
}

.app-container[data-theme="dark"] {
  background-color: #121212; /* Example dark background color */
  }

  .app-container[data-theme="light"] {
  background-color: #f0f0f0; /* Example light background color */
  }

.content-container{
  flex:1;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;  
  text-align: center;
  padding: 20px;
  transition: color 0.3s ease;
}

.content-container[data-theme="dark"] {
  color: #fff; 
}

.content-container[data-theme="light"] {
  color: #000; 
}

.title{
  font-size: 4rem;  
  margin-bottom: 2rem;
  font-family: Rocketron;
}

.follow-button{
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-family: Rocketron;
  background-color: #0057ff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.follow-button img {
  width: 2rem; 
  height: auto;
  margin-right: 0.5rem;
}

.follow-button:hover{
  background-color: #0040cc;
}


</style>