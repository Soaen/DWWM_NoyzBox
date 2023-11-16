<script setup>
import Header from '../components/Header.vue'
import router from '../router/index';
import Footer from '../components/Footer.vue';


import { useUserStore } from '../stores/user';
const store = useUserStore();

const loggedUser = store.getLoggedUser[0];

import { ref } from 'vue'

let isSend = ref('');
let nameCategorie = ref("");
let cateNameValid = ref(true);

if(loggedUser == null || loggedUser.length === 0){
    router.push('/');
}else if(loggedUser.role != 'ADMIN'){
    router.push('/');
}

let addCategories = async ()=>{


    if (nameCategorie.value.length < 3) {
        cateNameValid.value = nameCategorie.value.length >= 3
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

    cateNameValid.value = '';
    setTimeout(() => {
      isSend.value = '';
    }, 5000);
    } catch (error) {
        console.error("Erreur lors de l'envoi de la requête", error);
    }
}

</script>


<template>

    <Header/>

    <div v-if="loggedUser != null && loggedUser.length != 0 && loggedUser.role == 'ADMIN'">
        <h1>Ajouter Catégories</h1>
        <p v-show="isSend && isSend != ''" class="p-send">{{ isSend ? "Catégorie créée avec succès" : "Problème" }}</p>
        <form method="POST" @submit.prevent="addCategories" class="form-container">

            <div class="categorieadd-container">

                <label for="name">Nom de la catégorie:</label>
                <input type="text" v-model="nameCategorie" class="form-input">
                <p v-if="!cateNameValid">Le nom de la catégorie dois contenir au minimum 3 lettres !</p>
                <input type="submit" value="Ajouter la catégorie" class="submit-btn">

            </div>
        </form>
    </div>

    <Footer/>

</template>


<style lang="scss" scoped>

.p-send{
    text-align: center;
    font-size: 20px;
}

h1{
    text-align: center;
}
.form-container{
    display: flex;
    justify-content: center;
}
.categorieadd-container{
    display: flex;
    flex-direction: column;
    width: 50%;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    .form-input{
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                font-size: 16px;
                background-color: rgba($color: #000000, $alpha: 0.2);
                height: 50px;
                width: 360px;
                padding-left: 20px;
                border-radius: 15px;
                color: white;
                border: #4B4949 2px solid;
            }
            label{
                display:inline-block;
                font-size: 18px;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                margin-bottom: 10px;
            }
    .submit-btn{
        margin-top: 60px;
        width: 260px;
        height: 60px;
        border-radius: 25px;
        background-color: rgba($color: #000000, $alpha: 0.2);
        color: white;
        border: #4B4949 solid 2px;
        cursor: pointer;
        &:hover{
            background-color: rgba($color: rgb(113, 182, 39), $alpha: 1);

        }
    }
}

</style>