<script setup>
import Header from '../components/Header.vue'
import router from '../router/index';

import { ref } from 'vue'

let isSend = ref('');
let nameCategorie = ref("");
let cateNameValid = ref(true);

let addCategories = async ()=>{


    if (nameCategorie.value.length < 5) {
        cateNameValid.value = nameCategorie.value.length >= 5
    return;
  }

    try {
        console.log(nameCategorie);

    const data = {
        name: nameCategorie.value
    };

    const response = await fetch('http://localhost:5500/noise_categorie', {
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

    router.push('/')

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
        <h1>Ajouter Catégories</h1>
        <p v-show="isSend && isSend != ''">{{ isSend ? "Catégorie créer avec succès" : "Problème" }}</p>
        <form method="POST" @submit.prevent="addCategories">

            <div class="categorieadd-container">

                <label for="name">Nom de la catégorie:</label>
                <input type="text" v-model="nameCategorie">
                <p v-if="!cateNameValid">Le nom de la catégorie dois contenir au minimum 5 lettres !</p>

            </div>
            <input type="submit" value="Ajouter la catégorie">
        </form>
    </div>
</template>


<style lang="scss" scoped>
.categorieadd-container{
    display: flex;
    flex-direction: column;
    width: 50%;
    input{
        width: 300px;
    }
}

</style>