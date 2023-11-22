<script setup>

import Header from '../components/Header.vue'
import Footer from "../components/Footer.vue";

import { useUserStore } from '../stores/user';
import { useRoute } from 'vue-router';
const store = useUserStore();
const user = store.getLoggedUser;

const route = useRoute();





</script>

<template>

    <Header/>
    <h1>hello</h1>
<div class="Categorie">

    <h1 class="nomcate"> {{  route.query.category  }} </h1>

</div>




    
    <Footer>

</Footer>




</template>