<script setup>
import { RouterLink } from 'vue-router'
</script>


<template>

    <footer>

        <nav>
            <div class="footer-container">
                <div class="footer"> 
               <div class="noyzbox">
                 <p class="titre"> Noyzbox </p>
                    <p class="description">
                        Noyzbox est la bibliothèque de bruitages la plus complète et fun du web.
                    </p>
                </div>
                <div class="propos ">
                    <p class="titrepropos"> À propos </p>
                    <ul> 
                        <li> <RouterLink to ="/about"> Qui sommes nous</RouterLink> </li>
                       <li> <RouterLink to="/"> FAQ </RouterLink>  </li>
                       <li> <RouterLink to="/"> Accueil </RouterLink> </li>
                    </ul>
                </div>
                <div class="mention ">
                    <p class="titremention"> Mentions légales</p>
                   <RouterLink to="/"> Mentions légales </RouterLink>
                </div>
                <div class="contact">
                    <p class="titrecontact"> Contact </p>
                   <RouterLink to="/"> Contact </RouterLink>
                </div>

                
            </div>
            <div>

            
                <div class="copyright">
                    <p class="copy"> Copyright @NoyzBox 2023</p>
                </div>
                <div class="social">
                    <a href="https://facebook.com">
                        <img src="../assets/images/facebook.svg" alt="" class="media">
                    </a>
                    <a href="https://tiktok.com">
                        <img src="../assets/images/tiktok.svg" alt="" class="media">
                    
                    </a>
                    <a href="https://instagram.com">
                        <img src="../assets/images/instagram.svg" alt="" class="media">
                    
                    </a>
                    </div>
            </div>  

      

</div>
            

        </nav>
    </footer>


</template>


<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.footer{
    
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 200px;
}

.footer-container{
    background:  rgba(0, 0, 0, 0.5);

}

.copyright{
    display: flex ;
    justify-content: center;
    flex-direction: row;
}

.copy{
    font-size: 22px;
}

.titre{
    color: rgb(255, 255, 255);
    font-size: 50px;
    margin-bottom: 3px;


}
.noyzbox {
margin-bottom: 7px;

}
.description{
color: rgb(255, 255, 255);
text-align: left;
max-width: 320px;
font-size: 28px ;
font-family:'Poppins',Verdana, Geneva, Tahoma, sans-serif;
margin-top: 5px;
    
}

.propos {
font-size: 30px;
}
p{
display: flex;
flex-direction: column;
color: rgb(255, 255, 255);

text-align: left;
font-size: 35px ;


}
.titrepropos{

color: rgb(255, 255, 255);
font-size: 35px ;

}

li {
list-style: none;
display: flex;
}

ul{
    padding: 0;
}

a {
    color: aliceblue;
    text-decoration: none;
    display: flex;
    flex-direction: row;
    font-size: 24px ;
    text-align: left;
    font-family:'Poppins',Verdana, Geneva, Tahoma, sans-serif
    
}

.media{
    filter: invert(95%) sepia(100%) saturate(0%) hue-rotate(25deg) brightness(102%) contrast(101%);
}

.social{
    margin-left: 80%;
    margin-top: -50px;
    display: flex;
    flex-direction: row;
}

@media screen and (max-width: 1200px) {
    a{
        font-size: 16px;

    }
    .titrepropos, .titrecontact, .titremention, .copy{
        font-size: 20px;
    }
    .titre, .description{
        display: none;
    }

    .propos, .contact{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        ul{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
    }
    .social{
        margin-left: 30%;
        margin-top: 0;
    }

}



</style>