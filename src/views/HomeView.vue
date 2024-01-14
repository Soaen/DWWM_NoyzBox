<script setup>
import { ref, onMounted } from "vue"
import Header from '../components/Header.vue'
import Footer from "../components/Footer.vue"
import { useTempSearchStore } from '../stores/tempSearch';
import router from "../router";
const store = useTempSearchStore();
let rechercheEntree = ref("")


const fetchData = () => {
  store.setTempSearch(rechercheEntree.value)
  router.push('/search/name')
}

const placeholderText = ref(''); 
const cursorSpan = '|'; 
const isCursorVisible = ref(true) // État de visibilité du curseur
//let isCursorVisible = true; 

const phrases = ["Applaudissements", "Cri", "Fred", "Rire", "Bip"];
let currentPhraseIndex = 0;
let currentLetterIndex = 0;
let isDeleting = false;

const updatePlaceholder = () => {
  const currentPhrase = phrases[currentPhraseIndex];
  const cursorChar = isCursorVisible.value ? cursorSpan : ''; // Toujours afficher le curseur
  if (isDeleting) {
    currentLetterIndex--;
  } else {
    currentLetterIndex++;
  }

  placeholderText.value = currentPhrase.substring(0, currentLetterIndex) + cursorChar;
  
  if (!isDeleting && currentLetterIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(() => isCursorVisible.value = false, 1000); 
    setTimeout(updatePlaceholder, 1000); 
  } else if (isDeleting && currentLetterIndex === 0) {
    isDeleting = false;
    isCursorVisible.value = true; 
    currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
    setTimeout(updatePlaceholder, 500); 
  } else {
    setTimeout(updatePlaceholder, isDeleting ? 30 : 100); 
  }
};

// Gérer le clignotement du curseur
const blinkCursor = () => {
  isCursorVisible.value = !isCursorVisible.value;
  setTimeout(blinkCursor, 300); 
};

onMounted(() => {
  blinkCursor();
  updatePlaceholder();
});


</script>

<template>
  <Header/>

  <main>
    <div class="title-animation-container">
      <span>N</span>
      <span>o</span>
      <span>y</span>
      <span>z</span>
      <span>B</span>
      <span>o</span>
      <span>x</span>
    </div>
    <h1 class="slogan">Le meilleur des bruitages !</h1>
   
    <div class="barreSearch">
      <form @submit.prevent="fetchData" class="form-container">
        <div class="search-container">
          <input type="text" :placeholder="placeholderText" name="search" v-model="rechercheEntree">
          <button type="submit">
            <img src="../assets/images/search-svgrepo-com.svg" alt="loupe" class="loupe">
          </button>
        </div>
      </form>
    </div>
    
  </main>



  <Footer />
</template>

<style scoped lang="scss"> 

.loupe{
  filter: invert(95%) sepia(100%) saturate(0%) hue-rotate(25deg) brightness(102%) contrast(101%);
}

.title-animation-container {
   display: flex;
   justify-content: center;
   font-family: 'Bangers';
 }

 .title-animation-container span {
   font-size: 6rem;
   color: white;
   font-weight: bold;
   opacity: 0;
   animation: drop 0.4s linear forwards;
   text-shadow:
     -2px -2px 0 #000,
     2px -2px 0 #000,
     -2px 2px 0 #000,
     2px 2px 0 #000,
     /* Ombres noires plus épaisses */
     -3px -3px 0 #000,
     3px -3px 0 #000,
     -3px 3px 0 #000,
     3px 3px 0 #000;
   /* Ajouter une deuxième couche d'ombre pour plus d'épaisseur */

 }

 .slogan {
   text-shadow:
     -1px -1px 0 #000,
     1px -1px 0 #000,
     -1px 1px 0 #000,
     1px 1px 0 #000;
   font-size: 50px;
   opacity: 0;
  animation: slide 1.5s ease forwards;
}
 
@keyframes slide {
  from {
    opacity: 0;
    transform: translateX(100%); /* Commence à droite (hors de la vue) */
  }

  to {
    opacity: 1;
    transform: translateX(0); /* Glisse vers la gauche (position fixe) */
  }
}

 .title-animation-container span:nth-child(2) {
   animation-delay: 0.2s;

 }

 .title-animation-container span:nth-child(3) {
   animation-delay: 0.3s;

 }

 .title-animation-container span:nth-child(4) {
   animation-delay: 0.4s;

 }

 .title-animation-container span:nth-child(5) {
   animation-delay: 0.5s;

 }

 .title-animation-container span:nth-child(6) {
   animation-delay: 0.6s;
 }

 .title-animation-container span:nth-child(7) {
   animation-delay: 0.7s;
 }



 @keyframes drop {
   0% {
     transform: translateY(-200px) scaleY(0.9);
   }

   5% {
     opacity: 0.7;
   }

   50% {
     transform: translateY(0px) scaleY(1);
   }

   65% {
     transform: translate(-17px) scaleY(0.9);
   }

   75% {
     transform: translate(-22px) scaleY(0.9);
   }

   100% {
     transform: translate(0px) scaleY(1);
     opacity: 1;
   }

 }


 .form-container {
   display: flex;
   justify-content: center;
 }

 .search-container {
   display: flex;
   height: 70px;
   width: 500px;
   align-items: center;
   justify-content: center;
   background-image: linear-gradient(to right bottom, #e300ff, #ff00aa, #ff5956, #ffb900, #fffe00);
   box-shadow: -25px -10px 30px -5px rgba(225, 0, 255, 0.5),
     25px -10px 30px -5px rgba(255, 0, 212, 0.5),
     25px 10px 30px -5px rgba(255, 174, 0, 0.5),
     -25px 10px 30px -5px rgba(255, 230, 0, 0.5);
   padding: 4px;
   border-radius: 25px;

   &:hover {
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.883);
    }
 }

@keyframes blink {
  50% { opacity: 0; }
}

 main {
   margin-top: 10%;
 }

 h1 {
   font-size: 90px;
   color: white;
   text-align: center;
 }

 input {
   height: 70px;
   width: 500px;
   border: 3px solid;
   border-radius: 20px 0 0 20px;
   font-size: 30px;
   background-color: rgba($color: #000000, $alpha: 0.7);
   border: 0;
   color: white;
   padding-left: 20px;

   &::placeholder {
     color: rgba($color: #ffffff, $alpha: 0.6);
     margin-left: 20px;
   }
 }

 img {
   background: transparent;
   height: 20px;
   width: 20px;
 }

 button {
   width: 40px;
   height: 72px;
   text-align: center;
   color: rgba($color: #000000, $alpha: 0.5);
   border: 0 !important;
   border-radius: 0 20px 20px 0;
   cursor: pointer;
   font-size: 20px;
   border: 3px solid;
   background-color: rgba($color: #000000, $alpha: 0.7);

 }

 @media screen and (max-width: 1200px) {

   .title-animation-container {
     span {
       font-size: 60px;

     }
   }

   h1 {
     font-size: 32px;
   }

   .search-container {
     margin-top: 40px;
     width: 250px;

     input {
       width: 200px;
     }

   }

  .lotie-player{
    display: flex;
    justify-content: center;
    align-items: center;
  }


 }</style>