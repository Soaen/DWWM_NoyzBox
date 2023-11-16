<script setup>
import Footer from "../components/Footer.vue";
import Header from '../components/Header.vue'
import router from '../router/index';
import dayjs from 'dayjs'
import { useUserStore } from '../stores/user';
import 'dayjs/locale/fr'
const store = useUserStore();

const loggedUser = store.getLoggedUser[0];

if (loggedUser == null || loggedUser.length === 0) {
  router.push('/');
}

function formatDate(dateString) {
    const date = dayjs(dateString);
    date.locale('fr')
    return date.format('D/MM/YYYY');
}
</script>



<template>

    <Header/>

    <div class="img-container" v-if="loggedUser.length !== 0">
        <h1>Bienvenue {{ loggedUser.pseudo }}</h1>
        <RouterLink to="/addnoise" class="add-noise-btn">
            <span>Télécharger un bruit</span>
        </RouterLink>
        <img src="../assets/images/default.jpg" alt="Photo de profil de l'utilisateur" class="img-profil">
        <p class="wip">Changer la photo de profil</p>
        <RouterLink to='/addcategories' v-if="loggedUser.role == 'ADMIN'" class="cate-add-btn">Ajouter une catégorie</RouterLink>
    </div>


    <div class="container">

        <div class="details-container" v-if="loggedUser.length !== 0">

            <h2>Mes informations</h2>
            <ul>
                <li>Pseudonyme: {{ loggedUser.pseudo }}</li>

                <li>Mail: {{ loggedUser.email }}</li>

                <li>Membre depuis le: {{ formatDate(loggedUser.created_at) }}</li>
            </ul>

        </div>

        <div class="details-container">

            <h2>Mes bruits favoris</h2>
            <ul v-if="loggedUser.favoris.length == 0">
                <li>Vous n'avez aucun bruit favoris.</li>
            </ul>

        </div>

        <div class="details-container">

            <h2>Mes sons</h2>
            <ul>
                <li>Vous n'avez proposé aucun bruit.</li>
            </ul>
            
        </div>

    </div>

    <Footer/>


</template>

<style scoped lang="scss">
.cate-add-btn{
    color: white;
    font-size: 20px;
}
.wip{
    font-style: oblique;
    text-decoration-line: line-through;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.img-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 100px;
    .img-profil{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        overflow: hidden;
        object-fit: cover;
    }
}

.container{
    display: flex;
    flex-direction: row;
    width: 100%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    .details-container{
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 30%;
        margin-left: 5%;
        ul{
            list-style: none;
            margin: 0;
            padding: 0;
            text-align: left;
            li{
                margin-top: 10px;
            }
        }
    }
}

.add-noise-btn{
    position: absolute;
    right: 0;
    margin-top: 20px;
    margin-right: 20px;
    display: inline-block;
    text-decoration: none;
    color: #120817;
    background-color: rgb(121, 44, 193);
    border-radius: 2rem;
}

.add-noise-btn:hover span{
    background-color: #c58bfe;
}

.add-noise-btn:active span{
    translate: none;
}

.add-noise-btn span{
    display: inherit;
    border-radius: inherit;
    background-color: #9859f6;
    padding: 1rem 1rem;
    translate: 0.25rem -0.25rem;
    border: 2px solid #612a79;
    transition: translate 100ms
    cubic-bezier(0.175, 0.885, 0.32, 1.275),
    background-color 250ms;


}
</style>