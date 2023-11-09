<script setup>
import { ref } from 'vue';
import Header from '../components/Header.vue';
import router from '../router/index';
import bcrypt from 'bcryptjs';

let isSend = ref();
let userPrenom = ref("");
let userNom = ref("");
let userPseudo = ref("");
let userPassword = ref("");
let userConfirmPassword = ref("");
let userEmail = ref("");

let userNomValid = ref(true);
let userPrenomValid = ref(true);
let userPseudoValid = ref(true);
let userPasswordValid = ref(true);
let userConfirmPasswordValid = ref(true);
let userEmailValid = ref(true);

let cryptSalt = 10;

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

let addDatas = async ()=>{
    const salt = await bcrypt.genSalt(cryptSalt);
    const hash = await bcrypt.hash(userPassword.value, salt);

    
    if (userNom.value.length === 0 ||
      userPrenom.value.length === 0 ||
      userPseudo.value.length < 5 ||
      userPassword.value.length < 8 ||
      userConfirmPassword.value !== userPassword.value ||
      !emailRegex.test(userEmail.value)) {
    // Affichez les messages d'erreur appropriés
    userNomValid.value = userNom.value.length > 0;
    userPrenomValid.value = userPrenom.value.length > 0;
    userPseudoValid.value = userPseudo.value.length >= 5;
    userPasswordValid.value = userPassword.value.length >= 8;
    userConfirmPasswordValid.value = userConfirmPassword.value === userPassword.value;
    userEmailValid.value = emailRegex.test(userEmail.value);
    return; // Empêche l'envoi des données si l'une des validations échoue
  }

    try {
    const data = {
        prenom: userPrenom.value,
        nom: userNom.value,
        pseudo: userPseudo.value,
        password: hash,
        saltHash: cryptSalt,
        email: userEmail.value,
        role: 'USER',
        favoris: '',
        created_at: new Date(),
        last_modified: new Date(),
    };

    const response = await fetch('http://localhost:5500/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
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

    <Header/>    

    <div>

        <h1>Rejoins nous !</h1>

        <p v-show="isSend && isSend != ''">{{ isSend ? "Données envoyée avec succès" : "Problème" }}</p>
        
        <form method="POST" @submit.prevent="addDatas" class="form-register">

            <div class="form-container">

                <div>
                    <label for="surname">Nom:</label>
                    <div>
                        <input type="text" name="surname" id="surname" v-model="userNom" class="form-input">
                        <p v-if="!userNomValid">Le nom est obligatoire !</p>
                    </div>

                </div>

                <div>
                    <label for="name">Prénom:</label>

                    <div>
                        <input type="text" name="name" id="name" v-model="userPrenom" class="form-input">
                        <p v-if="!userPrenomValid">Le Prénom est obligatoire !</p>
                    </div>

                </div>

            </div>

            
            <div class="form-container">

                <div>

                    <label for="pseudo">Pseudonyme :</label>

                    <div>
                        <input type="text" name="pseudo" id="pseudo" v-model="userPseudo" class="form-input">
                        <p v-if="!userPseudoValid">Le Pseudonyme dois contenir au minimum 5 lettres !</p>
                    </div>

                </div>

                <div>


                    <label for="email">Entrez votre email</label>
                    
                    <div>
                        <input type="email" name="email" id="email" v-model="userEmail" class="form-input">
                        <p v-if="!userEmailValid">Les mots de passent doivent être égaux !</p>
                    </div>

                
                </div>

            </div>
            
            
            <div class="form-container">

                <div>
                    
                    <label for="retypepassword">Confirmez votre mot de passe :</label>

                    <div>
                        <input type="password" name="retypepassword" id="retypepassword" v-model="userConfirmPassword" class="form-input">
                        <p v-if="!userConfirmPasswordValid">Les mots de passent doivent être égaux !</p>
                    </div>
                    
                </div>

                <div>

                    <label for="password">Mot de passe :</label>

                    <div>
                        <input type="password" name="password" id="password" v-model="userPassword" class="form-input">
                        <p v-if="!userPasswordValid">Le mot de passe dois contenir au minimum 8 caractères !</p>
                    </div> 

                </div>

            </div>
            

            <input type="submit" value="S'inscrire">

        </form>

    </div>

</template>


<style scoped lang="scss">
form{
    color: white;
}
h1{
    text-align: center;
}

.form-register{
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
    .form-container{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        .form-input{
            
        }
    }
}
</style>