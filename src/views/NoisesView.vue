<script setup>

import Header from '../components/Header.vue'
import Footer from "../components/Footer.vue";

import { useUserStore } from '../stores/user';
const store = useUserStore();
const user = store.getLoggedUser();

</script>

<template>
    <Header/>
    <div>
        <p>Nos Sons</p>
        <p>{{ user.pseudo }}</p>
    </div>

    <Footer>

</Footer>
</template>