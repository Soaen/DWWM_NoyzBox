<script setup>
import { ref } from 'vue';
import Header from '../components/Header.vue';
import router from '../router/index';
import bcrypt from 'bcryptjs';

let isSend = ref();
let userPrenom = ref();
let userNom = ref();
let userPseudo = ref();
let userPassword = ref();
let userConfirmPassword = ref();
let userEmail = ref();

let addDatas = async ()=>{
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(userPassword.value, salt);

    try {
    const data = {
        prenom: userPrenom.value,
        nom: userNom.value,
        pseudo: userPseudo.value,
        password: hash,
        email: userEmail.value,
        role: 'USER',
        favoris: '',
        created_at: new Date(),
        last_modified: new Date()
    };

    const response = await fetch('http://localhost:5500/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      isSend.value = true;
    } else {
        isSend.value = false;
    }

    router.push({ path: '/home' })

    setTimeout(() => {
      isSend.value = '';
    }, 10000);
    } catch (error) {
        console.error("Erreur lors de l'envoi de la requête", error);
    }
}

</script>

<template>

    <Header/>    

    <div>

        <p v-show="isSend && isSend != ''">{{ isSend ? "Données envoyée avec succès" : "Problème" }}</p>
        
        <form method="POST" @submit.prevent="addDatas">

            <div>
                <label for="surname">Nom:</label>
                <input type="text" name="surname" id="surname" v-model="userNom">
            </div>

            <div>
                <label for="name">Prénom:</label>
                <input type="text" name="name" id="name" v-model="userPrenom">
            </div>

            <div>
                <label for="pseudo">Pseudonyme :</label>
                <input type="text" name="pseudo" id="pseudo" v-model="userPseudo">
            </div>

            <div>
                <label for="password">Mot de passe :</label>
                <input type="password" name="password" id="password" v-model="userPassword">
            </div>
            
            <div>
                <label for="retypepassword">Confirmez votre mot de passe :</label>
                <input type="password" name="retypepassword" id="retypepassword" v-model="userConfirmPassword">
            </div>

            <div>
                <label for="email">Entrez votre email</label>
                <input type="email" name="email" id="email" v-model="userEmail">
            </div>

            <input type="submit" value="S'inscrire">

        </form>

    </div>

</template>


<style scoped lang="scss">
form{
    color: white;
}
</style>