<script setup>

import Header from '../components/Header.vue'
import Footer from "../components/Footer.vue";

import { useUserStore } from '../stores/user';
const store = useUserStore();
const user = store.getLoggedUser;

</script>

<template>

    <Header/>

{{ noises.categories }}

    
    <Footer>

</Footer>




</template>