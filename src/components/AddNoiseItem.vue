<script setup>
import {ref} from "vue";
import router from "../router/index";
let noiseName = ref("");
let category = ref("");
let isSend = ref(false);

let file = ref(null); // Ajouter cette ligne

const onFileChange = (e) => {
    file.value = e.target.files[0];
};

let tryConnect = async () => {

    try {
        const data = {
            name: noiseName.value,
            id_categories: category.value,
            id_propose_user: 1,
            filePath: "String",
            id_admin_approve: 0,
            picture: "String",
            created_at: new Date(),
            last_modified: new Date(),
        };

        
        let formData = new FormData();
        formData.append('name', noiseName.value);
        formData.append('id_categories', category.value);
        formData.append('audioFile', file.value); // Ajouter le fichier ici

        const response = await fetch('http://localhost:5500/noises', {
            method: 'POST',
            body: formData, // Utiliser FormData
        });

        if (response.ok) {
            isSend.value = true;
        } else {
            isSend.value = false;
        }

        router.push({ path: '/' })

        setTimeout(() => {
            isSend.value = '';
        }, 10000);
    } catch (error) {
        console.error("Erreur lors de l'envoi de la requête", error);
    }
}

</script>

<template>
    <div>

        <p class="title"> Ajoute un bruit !</p>

        <form method="POST" @submit.prevent="tryConnect">
            <div class="form-container">
                <div class="form-input-container">
                    <label for="titre">Titre du bruitage :</label>
                    <input v-model="noiseName" type="text" name="titre" id="titre" class="form-input" placeholder="Titre">
                </div>
                <div class="form-input-container">
                    <label for="category">Catégorie(s) :</label>
                    <input v-model="category" type="checkbox" name="category" id="category" class="form-category-input">
                </div>
                <div class="form-input-container">
                    <label for="file" class="label-file">Choisir un bruit</label>
                    <input type="file" name="audioFile" id="file" class="input-file" @change="onFileChange">
                </div>
                <input type="submit" value="Envoyer" class="submit-btn">
            </div>
        </form>

    </div>
</template>

<style scoped lang="scss">
.title {
    display: flex;
    justify-content: center;
    font-size: 2rem;
}

.form-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .form-input-container {
        display: flex;
        flex-direction: column;
        margin: 15px;

        .form-input {
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

        .form-category-input {
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size: 16px;
            background-color: rgba($color: #000000, $alpha: 0.2);
            height: 50px;
            width: 50px;
            padding-left: 20px;
            border-radius: 15px;
            color: white;
            border: #4B4949 2px solid;
        }

        label {
            display: inline-block;
            font-size: 18px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            margin-bottom: 10px;
        }
    }
}

.label-file {
    cursor: pointer;
    color: #ffffff;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 16px;
    text-align: center;
    background-color: rgb(103, 102, 102);
    padding: 15px;
    width: 200px;
    border-radius: 15px;
    color: white;
    border: #4B4949 2px solid;
}

.label-file:hover {
    background-color: rgb(107, 48, 202);
}

// et on masque le input
.input-file {
    display: none;
}

.submit-btn {
    margin-top: 60px;
    width: 260px;
    height: 60px;
    border-radius: 25px;
    background-color: rgba($color: #000000, $alpha: 0.2);
    color: white;
    border: #4B4949 solid 2px;
    cursor: pointer;

    &:hover {
        background-color: rgba($color: rgb(113, 182, 39), $alpha: 1);

    }
}
</style>