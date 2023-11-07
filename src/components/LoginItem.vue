<script setup>
import bcrypt from 'bcryptjs';
import { ref } from 'vue';

let userPseudo = ref();
let userPassword = ref();

</script>

<template>

    <div>

        <form method="get" @submit.prevent="tryConnect">
            <div>
                <label for="pseudo">Pseudo:</label>  
                <input type="text" name="pseudo" id="pseudo" v-model="userPseudo">
            </div>
            <div>
                <label for="password">Mot de passe:</label>  
                <input type="text" name="password" id="password" v-model="userPassword">
            </div>

            <RouterLink to="/register">Je n'ai pas de compte</RouterLink>

            <input type="submit" value="Connexion">

        </form>

    </div>

</template>

<style>

form{
    color: white;
}
</style>