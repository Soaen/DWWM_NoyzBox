<script setup>
import bcrypt from 'bcryptjs';
import { ref } from 'vue';
import { useUserStore } from '../stores/user';
import router from '../router/index';

const store = useUserStore();

let userPseudo = ref("");
let userPassword = ref("");

let tempUser = ref({});

let isLoginFailed = ref(false);

let tryConnect = async () => {

    const response = await fetch('http://localhost:5500/users/' + userPseudo.value, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        const userData = await response.json();
            console.log(userData.user);
            tempUser.value = userData.user;
            const passwordsMatch = await bcrypt.compare(userPassword.value, tempUser.value.password);
            if(passwordsMatch){
                console.log("Bon");
                store.setLoggedUser(tempUser.value);
                router.push({ path: '/' });
            }else{
                isLoginFailed.value = true;
            }
    } else {
        isLoginFailed.value = true;
    }
};

</script>

<template>

    <div>

        <p v-if="isLoginFailed">Le mot de passe ou le pseudo n'est pas correct.</p>

        <form method="get" @submit.prevent="tryConnect">
            <div>
                <label for="pseudo">Pseudo:</label>  
                <input type="text" name="pseudo" id="pseudo" v-model="userPseudo">
            </div>
            <div>
                <label for="password">Mot de passe:</label>  
                <input type="password" name="password" id="password" v-model="userPassword">
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