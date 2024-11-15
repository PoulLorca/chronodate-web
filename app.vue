<template>
  <div class="app-container">
    <Background />        
    <div class="content-container">
      <h1 class="title">CronoDate⏳</h1>
      <LoadingBar />
      <button class="follow-button" @click="followOnBlueSky">
        <img src="~/assets/images/You Rock Hand devil horns 3D pixel icon.svg" alt="">
        Follow on BlueSky
      </button>
      <Footer />
    </div>
  </div>
</template>

<script setup lang="ts">
const followOnBlueSky = () => {
  window.open('https://bsky.app/profile/chronodate.bsky.social', '_blank')
};

</script>

<style>
.app-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.content-container{
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #000;
  text-align: center;
  padding: 20px;
}

.title{
  font-size: 4rem;  
  margin-bottom: 2rem;
  font-family: Rocketron;
}

.follow-button{
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

.follow-button:hover{
  background-color: #0040cc;
}


</style>