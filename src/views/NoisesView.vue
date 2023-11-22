<script setup>

import Header from '../components/Header.vue'
import Footer from "../components/Footer.vue";
import {onMounted, ref} from "vue";
import { useUserStore } from '../stores/user';
const store = useUserStore();
const user = store.getLoggedUser;
let Datacate = ref() ;
let Showeight = 0
let Showall = false 
let Datanoises = ref();
let Datasort = ref([]);

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
let fetchcnoises= async () => {
    try {
        const response = await fetch("http://localhost:5500/noises"); 
        Datanoises.value = await response.json();
        sortData()
    } 
    catch(err){
        console.error(err);
    }


}
onMounted (()=>{
    fetchcategory();
    fetchcnoises();
    
})

let sortData=()=>
{
    const noiseslength =  Datanoises.value.length -1;
    Datanoises.value.length  ;
    for (let i = noiseslength; i > noiseslength -5 ; i--) {
        Datasort.value.push(Datanoises.value[i])
        
    }
}

const playSound = (noise) =>{
    if(noise) {
        var audio = new Audio(noise);
        audio.play();
      }
}



</script>

<template>


    <Header/>

    <div>

        <div class="categories">
            <p class="noscategories"> 
                Catégories
            </p>
 <div class="catephoto">
 

         <RouterLink :to="'/detailnoises?category=' + categories.name"  v-for="(categories, index) in Datacate"  v-show="!Showall && index < 8"   class="boucle">  {{ categories.name }} </RouterLink>

<div v-if="index< 8 " > 
           <span class="form"> 
         </span>
         

<p>   {{categories.name}}</p>

</div>




 </div>
 </div>

</div> 
<div class="fleche">
    <button class="btnfleche">
        <img src="../assets/images/flecheblanche.svg" class="fle" alt="">

    </button>


        </div>
  


    <div class="last">
<p  class="titre"> 
    Les derniers ajoutés
</p>



    </div>

<div class="last-add "> 

    <div v-for="(noises, index) in Datasort" :key="index" v-show="!Showall && index < 5"   class="boucle">
<div v-if="index< 5 " > 


   <p >{{ noises.name }}</p>
            <button class="play-btn" @click.prevent="playSound('http://localhost:5173/' + noises.path)">
            <img src="../assets/images/play-btn3.png" alt="button play"> </button>
            

</div>

</div>

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
    margin-top: 100px;


}

.noscategories {
    font-size: 70px;
    display: flex;
    justify-content: center;
color: rgb(255, 12, 194);}

.form {
display: block;
    background-color: rgb(16, 143, 143);
    border-radius: 200px;
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: row;
 
    
    
}

.boucle {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    font-size: 20px;
    margin-top: 30px;

    
    
    

}

.detailnoises {

    color: azure;
}
a {
    text-decoration: none;
    margin-top: 20px;
}


.play-btn {
    background-color: rgba(255, 255, 255, 0);
    border: 0;
    cursor: pointer;

    img {
        width: 80px;
        border-radius: 50%;
        box-shadow: 5px 5px 0px #360982;
        transition: all 0.3s ease;

        &:hover {
            filter: brightness(1.4);
        }
    }

    &:active img {
        box-shadow: none;
        transform: translateY(4px);
        filter: brightness(1.7);
    }
}


.btnfleche {
height: 70px;
width: 70px;
background-color: transparent;
border: 0;
display: flex;
justify-content: center;
flex-direction: row;

}

.fleche{
    display: flex;
    justify-content: center;
    margin-top: 100px;
}
.fle{
    height:90px ;
    width: 90px;
    display: flex;
justify-content: center;

    
}

.pluslike {
    display: flex;
justify-content: center;
margin-top: 10%;
flex-direction: column;
align-items: center;
}

.titre{
font-size: 30px;


}

.last {
    margin-top: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.last-add{
    margin-top: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    
}

</style>