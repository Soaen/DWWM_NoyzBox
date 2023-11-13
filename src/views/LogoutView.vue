<script setup>
import { useUserStore } from '../stores/user';
import router from '../router/index';

const store = useUserStore();


store.destroyLoggedUser();

router.push('/')

</script>


<template>

    <h1>Déconnexion...</h1>


</template>