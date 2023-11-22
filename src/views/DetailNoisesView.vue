<script setup>

import Header from '../components/Header.vue'
import Footer from "../components/Footer.vue";
import {onMounted, ref} from "vue";
import { useUserStore } from '../stores/user';
import { useRoute } from 'vue-router';
const store = useUserStore();
const user = store.getLoggedUser;

const route = useRoute();
let Datanoises = ref();






let fetchnoises= async () => {
    try {
        const response = await fetch("http://localhost:5500/noisesbycate/"+ route.query.category); 
        Datanoises.value = await response.json();
        
    } 
    catch(err){
        console.error(err);
    }


}
onMounted (()=>{
    
    fetchnoises();
    
})

const playSound = (noise) =>{
    if(noise) {
        var audio = new Audio(noise);
        audio.play();
      }
}

</script>

<template>

    <Header/>
    <h1>hello</h1>
<div class="Categorie">

    <h1 class="nomcate"> {{  route.query.category  }} </h1>

</div>

<div class="affichage">
    <div v-for="(noises, index) in Datanoises.noises" :key="index" class="boucle">
        
<p> {{ noises.name }}</p>
<button class="play-btn" @click.prevent="playSound('http://localhost:5173/' + noises.path)">
            <img src="../assets/images/play-btn3.png" alt="button play"> </button>
</div>
</div>
    
    <Footer>

</Footer>



</template>

