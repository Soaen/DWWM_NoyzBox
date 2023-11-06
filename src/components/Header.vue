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
    nav {
        display: flex;
        height: 80px;
        align-items: center;
        justify-content: space-between;
        width: 97%;
        margin: 1%;
        border: 2px white solid;
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