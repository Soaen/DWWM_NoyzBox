<script setup>
import bcrypt from 'bcryptjs';
import { ref } from 'vue';
import { useUserStore } from '../stores/user';
import router from '../router/index';

const store = useUserStore();

let userPseudo = ref("");
let userPassword = ref("");

let tempUser = ref({});

let isLoginFailed = ref(false);

let tryConnect = async () => {

    const response = await fetch('http://localhost:5500/users/' + userPseudo.value, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        const userData = await response.json();
            console.log(userData.user);
            tempUser.value = userData.user;
            const passwordsMatch = await bcrypt.compare(userPassword.value, tempUser.value.password);
            if(passwordsMatch){
                store.setLoggedUser(tempUser.value);
                router.push({ path: '/profil' });
            }else{
                isLoginFailed.value = true;
            }
    } else {
        isLoginFailed.value = true;
    }
};

</script>

<template>

    <div>

        <p v-if="isLoginFailed">Le mot de passe ou le pseudo n'est pas correct.</p>

        <form method="get" @submit.prevent="tryConnect">
            <div class="form-container">
                <div class="form-input-container">
                    <label for="pseudo">Pseudonyme :</label>  
                    <input type="text" name="pseudo" id="pseudo" v-model="userPseudo" class="form-input" placeholder="Pseudonyme">
                </div>
                <div class="form-input-container">
                    <label for="password">Mot de passe :</label>  
                    <input type="password" name="password" id="password" v-model="userPassword" class="form-input" placeholder="Mot de passe">
                </div>
            </div>


            <RouterLink to="/register" class="dont-have-account">Je n'ai pas de compte</RouterLink>

            <input type="submit" value="Connexion" class="submit-btn">

        </form>

    </div>

</template>

<style scoped lang="scss">

form{
    color: white;
    display: flex;
    flex-direction: column;
    width: 80%;
    align-items: center;
    margin: auto;
    height: 100%;
    margin-top: 150px;
    .form-container{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        .form-input-container{
            display: flex;
            flex-direction: column;

            .form-input{
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                font-size: 16px;
                background-color: rgba($color: #000000, $alpha: 0.2);
                height: 50px;
                width: 360px;
                padding-left: 20px;
                border-radius: 15px;
                color: white;
                border: #4B4949 2px solid;
            }
            label{
                display:inline-block;
                font-size: 18px;
                font-family: Verdana, Geneva, Tahoma, sans-serif;
                margin-bottom: 10px;
            }
        }
    }
    .submit-btn{
        margin-top: 60px;
        width: 260px;
        height: 60px;
        border-radius: 25px;
        background-color: rgba($color: #000000, $alpha: 0.2);
        color: white;
        border: #4B4949 solid 2px;
        cursor: pointer;
        &:hover{
            background-color: rgba($color: rgb(113, 182, 39), $alpha: 1);

        }
    }
    .dont-have-account{
        margin-top: 50px;
        color: white;
        font-size: 24px;
        &:hover{
            opacity: 0.7;
        }
    }
}

@media screen and (max-width: 1200px) {
    form .form-container{
        display: flex;
        flex-direction: column;
        .form-input-container .form-input{
            width: 90%;
        }
    }
}


</style>
