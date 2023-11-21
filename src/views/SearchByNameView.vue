<script setup>
import Header from '../components/Header.vue'
import Footer from "../components/Footer.vue"
import { useTempSearchStore } from '../stores/tempSearch';
import router from '../router';
import {ref, onMounted} from 'vue';

const store = useTempSearchStore();
let datasByName = ref();

if(store.getTempSearch == ""){
    router.push('/');
}

const fetchData = async () => {
    try{
        const responseData = await fetch('http://localhost:5500/noises/' + store.getTempSearch);
        datasByName.value = await responseData.json();
        datasByName.value = datasByName.value.noises;
    
    }catch(err){
        console.error(err);
    }
}

onMounted(() => {
    fetchData();
});

const playSound = (noise) =>{
    if(noise) {
        let audio = new Audio(noise);
        audio.play();
      }
}


</script>

<template>

    <Header/>

    <p class="title">Résultats :</p>

    <div v-if="datasByName != undefined" class="play-container">
        <div v-for="data in datasByName" class="play-item">

            <p >{{ data.name }}</p>
            <button class="play-btn" @click.prevent="playSound('http://localhost:5173/' + data.path)">
            <img src="../assets/images/play-btn3.png" alt=""></button>
            
        </div>
    </div>
    
    <div v-else class="else-class">

        <lottie-player src="https://lottie.host/28612908-7d80-4fcb-9972-928c2a302ef6/vTXWN9C6jV.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></lottie-player>
        <h2>Aucun bruit contenant "{{ store.getTempSearch }}" n'a été trouvé.</h2>
        
    </div>

    <Footer/>

</template>

<style scoped lang="scss">

.else-class{
    width: 100%;
    margin-top: 100px;
    font-size: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title{
    margin-top: 100px;
    font-size: 40px; 
    font-family: 'Bangers';
    text-align: center;
     
}

.play-container{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 80%; // Limite la largeur maximale du conteneur
    margin: auto; // Centre le conteneur sur la page
    margin-top: 100px;
}

.play-item{
    flex-basis: 20%;
    margin: 0 10px; // Ajoute une marge de 10px à gauche et à droite
    margin-bottom: 50px;
    }p{
        font-size: 15px;
        font-family: 'Poppins', sans-serif;
    }       

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



</style>