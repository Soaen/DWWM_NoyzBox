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
        const responseData = await fetch('http://localhost:5500/noise/' + store.getTempSearch);
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

        <h2>Aucun son avec ce nom n'a été trouver.</h2>
        
    </div>

    <Footer/>

</template>

<style scoped lang="scss">

.else-class{
    margin-top: 300px;
    text-align: center;
    font-size: 40px;
}

</style>