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
    
    }catch(err){
        console.error(err);
    }
}

onMounted(() => {
    fetchData();
});


</script>

<template>

    <Header/>

    <div v-if="datasByName != undefined">
        
            <p v-for="data in datasByName">{{ data.name }}</p>
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

</style>