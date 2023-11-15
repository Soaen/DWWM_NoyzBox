<script setup>
import { useUserStore } from '../stores/user';
import router from '../router/index';
import Footer from "../components/Footer.vue";
const store = useUserStore();


store.destroyLoggedUser();

router.push('/')

</script>


<template>

    <h1>Déconnexion...</h1>


    <Footer>

</Footer>

</template>