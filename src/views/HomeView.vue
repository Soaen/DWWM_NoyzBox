<script setup>
import { ref } from "vue"
import Header from '../components/Header.vue'
import Footer from "../components/Footer.vue"
import { useTempSearchStore } from '../stores/tempSearch';
import router from "../router";
const store = useTempSearchStore();
let rechercheEntree = ref("") 


const fetchData = () => {
  store.setTempSearch(rechercheEntree.value)
  router.push('/search/name')
}

</script>

<template>
  <Header/>

  <main>
    <h1>Le meilleur des bruitages</h1>
    <h2>Hit bruitage only</h2>

    <div class="barreSearch">
      <form @submit.prevent="fetchData" class="form-container">
        <div class="search-container">
          <input type="text" placeholder="Search..." name="search" v-model="rechercheEntree">
          <button type="submit">
            <img src="../assets/images/search-svgrepo-com.svg" alt="loupe">
          </button>
        </div>
      </form>
    </div>
  </main>
  

  <Footer/>



</template>

<style scoped lang="scss"> 

.form-container{
  display: flex;
  justify-content: center;
}

.search-container{
  display: flex;
  height: 70px;
  width: 500px;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to right bottom, #e300ff, #ff00aa, #ff5956, #ffb900, #fffe00);
  box-shadow: -25px -10px 30px -5px rgba(225, 0, 255, 0.5),
    25px -10px 30px -5px rgba(255, 0, 212, 0.5),
    25px 10px 30px -5px rgba(255, 174, 0, 0.5),
    -25px 10px 30px -5px rgba(255, 230, 0, 0.5);
  padding: 4px;
  border-radius: 25px;
}


main {
  margin-top: 10%;
}

h1 {
  font-size: 90px;
  color: white;
  text-align: center;
}

h2 {
  margin-top: 30px;
  color: white;
  font-size: 35px;
  text-align: center;
}

input {
  height: 70px;
  width: 500px;
  border: 3px solid;
  border-radius: 20px 0 0 20px;
  font-size: 30px;
  background-color: rgba($color: #000000, $alpha: 0.7);
  border: 0;
  color: white;
  padding-left: 20px;
  &::placeholder{
    color: rgba($color: #ffffff, $alpha: 0.6);
    margin-left: 20px;
  }
}

img {
  background: transparent;
  height: 20px;
  width: 20px;
}

button {
  width: 40px;
  height: 72px;
  text-align: center;
  color: rgba($color: #000000, $alpha: 0.5);
  border: 0!important;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
  font-size: 20px;
  border: 3px solid;
  background-color: rgba($color: #000000, $alpha: 0.7);

}

</style>