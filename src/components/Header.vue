<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useTempSearchStore } from '../stores/tempSearch';

import { useUserStore } from '../stores/user';
let store = useUserStore();

const storesearch = useTempSearchStore();

const searchData = storesearch.getTempSearch != undefined ? storesearch.getTempSearch : null;

</script>

<template>

    <header>
        <nav>
            <RouterLink to="/" >
                <img src="/logo.png" alt="" class="logo-navbar" v-if="searchData == null || searchData != 'fred'">
                <img src="../assets/images/fred.png" alt="fred easter egg" class="logo-navbar easteregg" v-else>
            </RouterLink>

            <div>
                <RouterLink to="/" class="hidden-responsive">Accueil</RouterLink>
                <RouterLink to="/noises">Nos bruits</RouterLink>
                <RouterLink to="/about" class="hidden-responsive">A propos</RouterLink>
                <RouterLink to="/login" v-if="store.getLoggedUser.length == 0">Se connecter</RouterLink>
                <RouterLink to="/profil" v-if="store.getLoggedUser.length > 0">Profil</RouterLink>
                <RouterLink to="/logout" v-if="store.getLoggedUser.length > 0">Se déconnecter</RouterLink>
            </div>
        </nav>
    </header>

    <RouterView/>

</template>

<style scoped lang="scss">

header{
    height: 100%;
    background: linear-gradient(180deg, rgba(2, 0, 36, 1) 0%, rgba(0, 0, 0, 1) 10%, rgba(255, 255, 255, 0) 100%);

    nav {
        display: flex;
        height: 80px;
        align-items: center;
        justify-content: space-between;
        width: 97%;
        padding: 5px;

        div{
            width: 40%;
            display: flex;
            justify-content: space-around;

            a{
                color: white;
                text-decoration: none;
                font-size: 20px;
                
                &:hover{
                    opacity: 0.7;
                }

            }

        }            

        .logo-navbar{
            height: 80px;
            &:hover{
                opacity: 0.8;
                transform: rotate(360deg);
                transition: transform 0.5s ease; 
            }

        }

    }
     
}

.easteregg{
    border-radius: 2500%;
    width: 80px;
    object-fit: cover;
}

@media screen and (max-width: 1200px) {
header nav div{
    width: 70%;
}
    .hidden-responsive{
        display: none;
    }
}

</style>