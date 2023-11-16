<script setup>

import Header from '../components/Header.vue'
import Footer from "../components/Footer.vue";
import {onMounted, ref} from "vue";
import { useUserStore } from '../stores/user';
const store = useUserStore();
const user = store.getLoggedUser;
let Datacate = ref() ;

let fetchcategory = async () => {
    try {
        const response = await fetch("http://localhost:5500/noise_categorie"); 
        Datacate.value = await response.json();
        console.log(Datacate);
    } 
    catch(err){
        console.error(err);
    }


}
onMounted (()=>{
    fetchcategory();
})

</script>

<template>


    <Header/>

    <div>

        <div class="categories">
            <p> 
                Catégories
            </p>
 <div class="catephoto">

         <div v-for="categories in Datacate" class="boucle">
            <span class="form"> 
         </span>
    <RouterLink to="/noisesview" class="detailnoises"> {{categories.name}}</RouterLink>
</div>


 </div>


        </div>




        <p>{{ user.pseudo }}</p>


    </div>

    <Footer>

</Footer>

</template>

<style scoped lang="scss"> 

.catephoto {

    display: flex;
    justify-content: center;
    font-size: 50px;
    flex-direction: row;
    align-content: space-between;
    flex-wrap: wrap;


    
    

}

.form {
display: block;
    background-color: aqua;
    border-radius: 200px;
    width: 90px;
    height: 90px;
 
    
    
}

.boucle {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 500px;
}

.detailnoises {

    color: azure;
}
a {
    text-decoration: none;
    margin-top: 20px;
}

</style>