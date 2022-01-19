<script>
  import card from './components/card.vue';
  import load from './components/loading.vue';
  import toggle from './components/toggleButton.vue';
  import headerTop from './components/header.vue';
  export default {
    components: {
    card,
    load,
    toggle,
    headerTop
  }
}
</script>
<script setup>
  import {reactive} from 'vue';
  const state = reactive({
    fetchedData: [],
    firstLoad: false,
    secondLoad: false,
    load: false,
    startDay : 6,
    darkOn: "light",
  })
  const dateFunc = () => {
    var date = new Date();
    var last = new Date(date.getTime() - (state.startDay * 24 * 60 * 60 * 1000));
    var day = last.getDate();
    var month = last.getMonth() + 1;
    var year = last.getFullYear();
    const res = year.toString() + "-" + month.toString() + "-" + day.toString();
    state.startDay += 6
    return res;  
  }

  const darkMode = () => {
    if (state.darkOn == "dark"){
      state.darkOn = "light"
    } else {
      state.darkOn = "dark"
    }
  }
  const viewMore = () => {
    state.secondLoad = true
    fetch('https://api.nasa.gov/planetary/apod?start_date=' + dateFunc() + '&api_key=cPqzjcGVcNKSp4Klb7Nz4IZpY2XpKBguMiFPwwgD').
    then((res)=> {state.secondLoad = false; 
                  return res.json()}).
    then((data)=> {state.fetchedData = data.reverse()})
  }
  fetch('https://api.nasa.gov/planetary/apod?start_date=' + dateFunc() + '&api_key=cPqzjcGVcNKSp4Klb7Nz4IZpY2XpKBguMiFPwwgD').
  then((res)=> {state.firstLoad = true; 
                return res.json()}).
  then((data)=> {state.fetchedData = data.reverse()})
</script>

<template>
  <div :class="state.darkOn">
    <div class="bg-gray-100 dark:bg-gray-900 flex justify-center">
      <div v-if="state.firstLoad" class="p-14 justify-center">
        <headerTop :darkOn="state.darkOn" />
        <toggle v-on:childMessage="darkMode" class="flex m-auto justify-center mb-5"/>
        <div v-if="state.darkOn == 'light'" class="flex m-auto justify-center mb-5">
          <img style="width: 30px;" src="/sun-solid.svg" alt="sun">
        </div>
        <div v-if="state.darkOn == 'dark'" class="flex m-auto justify-center mb-5">
          <img style="width: 30px;" width="30px" src="/moon.png" alt="moon">
        </div>
        <div class="grid gird-cols-1 justify-center space-y-8">
          <card v-for="(cardData, i) in state.fetchedData" :key="i" :cardData="cardData" />
        </div>
        <button @click="viewMore" class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded flex m-auto mt-6">
          <span>view more posts</span>
        </button>
        <div v-if="state.secondLoad">
          <load class="m-auto mt-8"/>
        </div>
      </div>
      <div class="flex h-screen" v-else>
        <load class="m-auto"/>
      </div>
    </div>
  </div>
</template>

<style>
  .font {
    font-family: 'Orbitron', sans-serif;
  }
  .font-text {
    font-family: 'Martel', serif;
  }
</style>