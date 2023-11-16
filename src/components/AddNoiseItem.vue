<script setup>
import {ref, onMounted} from "vue";
import { useUserStore } from '../stores/user'; 
import Footer from "../components/Footer.vue";
import router from '../router/index';
const userStore = useUserStore();
const loggedUser = userStore.getLoggedUser[0];
let noiseName = ref("");
let category = ref([]);
let isSend = ref(false);
let file = ref(null); 
let datasCate = ref();
let fileName = ref('')

if(loggedUser == null || loggedUser.length === 0){
    router.push('/');
}

const onFileChange = (e) => {
    file.value = e.target.files[0];
    fileName.value = file.value.name;
};

const fetchData = async () => {
    try{
        const responseData = await fetch('http://localhost:5500/noise_categorie');
        datasCate.value = await responseData.json();
    }catch(err){
        console.error(err);
    }
}

let tryConnect = async () => {

    try {

        let formData = new FormData();
        formData.append('titre', noiseName.value);
        formData.append('category', category.value);
        formData.append('adminApprove', 0);
        formData.append('proposeUser', userStore.getLoggedUser[0]._id); //récupérer l'id de l'utilisateur actuellement connecté
        formData.append('audioFile', file.value); 
        formData.append('created_at', new Date());
        formData.append('last_modified', new Date());

        const response = await fetch('http://localhost:5500/noises', {
            method: 'POST',
            body: formData, // Utiliser FormData
        });

        if (response.ok) {
            isSend.value = true;
        } else {
            isSend.value = false;
        }

        setTimeout(() => {
            isSend.value = '';
        }, 10000);
    } catch (error) {
        console.error("Erreur lors de l'envoi de la requête", error);
    }
}

onMounted(() => {
    fetchData();
});

</script>

<template>
    <div v-if="loggedUser != null && loggedUser.length != 0">

        <p class="title"> Ajoute un bruit !</p>

        <form method="POST" @submit.prevent="tryConnect">
            <div class="form-container">
                <label class="label-title" for="titre">Titre du bruitage :</label>
                <div class="form-input-container">
                    
                    <input v-model="noiseName" type="text" name="titre" id="titre" class="form-input" placeholder="Titre">
                </div>

                 <label class="category" for="category">Sélectionner Catégorie(s) :</label>
                <div class="checkbox-input-container">
                    <div class="checkbox" v-for="cate in datasCate">
                        <label :for="cate._id">{{ cate.name }}</label>
                        <input type="checkbox" :name="cate._id" :id="cate._id" :value="cate.name" v-model="category">
                    </div>
                </div>
                <div class="form-input-container">
                    <label for="file" class="label-file">Importer</label>
                    <label for="file">{{ fileName != "" ? fileName  : "Aucun son upload"  }}</label>
                    <input type="file" name="audioFile" id="file" class="input-file" @change="onFileChange">
                </div>
                <input type="submit" value="Envoyer" class="submit-btn">
            </div>
        </form>

    </div>

    <Footer>

    </footer>
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
        margin: 50px;

        .form-input {
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size: 16px;
            background-color: rgba($color: #000000, $alpha: 0.2);
            height: 50px;
            width: 300px;
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

.label-title{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.label-file {
    cursor: pointer;
    color: #ffffff;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1rem;
    text-align: center;
    background-color: rgb(103, 102, 102);
    padding: 15px;
    width: 150px;
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

.category{
    font-family: Verdana, Geneva, Tahoma, sans-serif;

}

.checkbox-input-container{  
    padding-top: 50px; 
     width: 50%;
     flex-wrap: wrap;
    display: flex;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
        justify-content: space-between;
}
.checkbox{

    display: flex;
    width: 40%;
    label{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        width: 80%;
    }
}
</style>