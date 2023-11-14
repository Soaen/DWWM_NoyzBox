<script setup>
import {ref} from "vue"
import Header from '../components/Header.vue'
let rechercheEntree = ref() 

</script>

<template>
  <Header/>

<main>
<div class="h1">
    <h1> Le meilleur des bruitages </h1>
</div>

<div class="h2">   
    <h2>Hit bruitage only </h2>  
</div>
<div class="barreSearch">
<form> 
    <input type="texte" id="search" name="search" placeholder="Search.."
    v-model="rechercheEntree">
    
    <button type="submit">
      <img src="../assets/images/search-svgrepo-com.svg" alt="loupe">
    </button>
  

</form>


</div>


      


   

  


</main>
  




</template>

<style scoped lang="scss"> 

*{
  margin: auto;
  padding: auto;
}
.h1{
  margin-top: 100px;
  padding-left: 500px;
  padding-right: 500px;
  align-content: center;
  display: flex;
  
}

h1 {
  font-size: 90px;
  color: white;
  text-align: center;

}
.h2 {
margin-top: 30px;
  color: white;
  display: flex;
  align-content: center;
}

h2 {
  font-size: 35px;
  text-align: center;
}

.barreSearch {
 margin-top: 70px;
 
}

input { 
  display: flex;
  align-content: center;
  height: 70px;
  width: 700px;
  border-radius: 30px;
  border: 3px solid;
  border-color: rgb(205, 44, 119);

 

}

img {
background: transparent;
  height: 20px;
  width: 20px;
}
button{
 
 margin-left: 1200px;





}
</style>