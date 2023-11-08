<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

    <header>
        <nav>
            <RouterLink to="/">
                <img src="/logo.png" alt="" class="logo-navbar">
            </RouterLink>
            <div>
                <RouterLink to="/">Accueil</RouterLink>
                <RouterLink to="/noises">Nos sons</RouterLink>
                <RouterLink to="/about">A propos</RouterLink>
                <RouterLink to="/login">Se connecter</RouterLink>
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
            width: 30%;
            display: flex;
            justify-content: space-around;

            a{
                color: white;
                text-decoration: none;
                font-size: 16px;

            }

        }            

        .logo-navbar{

            height: 80px;

        }

    }
    
}

</style>