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
let isLoading = ref(true);






let fetchnoises= async () => {
    try {
        const response = await fetch("http://localhost:5500/noisesbycate/"+ route.query.category); 
        Datanoises.value = await response.json();
        isLoading.value = false;
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
<div class="Categorie">

    <p class="nomcate"> {{  route.query.category  }} </p>

</div>

<div class="affichage">
    <div v-for="(noises, index) in Datanoises.noises" :key="index" class="boucle" v-if="!isLoading">
        
        <p> {{ noises.name }}</p>
        <button class="play-btn" @click.prevent="playSound('http://localhost:5173/' + noises.path)">
        <img src="../assets/images/play-btn3.png" alt="button play"> </button>
    </div>
    <div v-else>
        <p>Loading...</p>
    </div>
</div>
    
    <Footer>

</Footer>



</template>

<style scoped lang="scss"> 

.play-btn {
    background-color: rgba(255, 255, 255, 0);
    border: 0;
    cursor: pointer;

    img {
        width: 80px;
        border-radius: 50%;
        box-shadow: 5px 5px 0px #360982;
        transition: all 0.3s ease;

        &:hover {
            filter: brightness(1.4);
        }
    }

    &:active img {
        box-shadow: none;
        transform: translateY(4px);
        filter: brightness(1.7);
    }
}

.affichage {

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 20%;
    margin-right:20% ;
    
}

.nomcate {

    font-size: 60px;
    display: flex;
    justify-content: center;
    color: rgb(255, 27, 141);
   
}
</style>

