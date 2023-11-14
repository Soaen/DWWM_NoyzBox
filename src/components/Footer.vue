<script setup>
import { RouterLink } from 'vue-router'
</script>


<template>

    <footer>

        <nav>
            <div class="Footer"></div>
               <div class="noyzbox">
                 <p> Noyzbox </p>
                    <p>
                        Noyzbox est la bibliothèque de bruitages la plus complète et fun du web.
                    </p>
                </div>
                <div class="propos ">
                    <p> À propos </p>
                    <ul> 
                        <li> <RouterLink to ="Nous" > Qui sommes nous</RouterLink></li>
                       
                       <li> <RouterLink to="FAQ"> FAQ </RouterLink>  </li>
                       <li> <RouterLink to="Accueil"> Accueil </RouterLink> </li>
                    </ul>
                </div>
                <div class="mention ">
                    <p> Mentions légales</p>
                   <RouterLink to="Mentions légales" > Mentions légales </RouterLink>
                </div>
                <div class="contact">
                    <p> Contact </p>
                   <RouterLink to="Contact"> Contact </RouterLink>
                </div>


        </nav>
    </footer>


</template>


<style scoped lang="scss">


</style>