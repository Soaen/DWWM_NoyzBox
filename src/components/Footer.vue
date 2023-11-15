<script setup>
import { RouterLink } from 'vue-router'
</script>


<template>

    <footer>

        <nav>
            <div class="">
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
                        <li> <RouterLink to ="Nous" > Qui sommes nous</RouterLink> </li>
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

                
            </div>
            <div class="copyright">
                    <p class="copy"> Copyright @NoyzBox 2023</p>
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
    background:  rgba(0, 0, 0, 0.5);
   margin-top: 200px;
   
   
}

.copyright{
    display: flex ;
    justify-content: center;

    
 
}
.copy{
    font-size: 22px;
    margin: -60px;
  

    
  
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
  color: rgb(182, 41, 182);
  


 

}
p{
display: flex;
flex-direction: column;
color: rgb(255, 255, 255);

margin-top: 40px;
text-align: left;
font-size: 35px ;


}
.titrepropos{

color: rgb(255, 255, 255);
font-size: 35px ;

}


.mention {
    
    color: aqua;


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



</style>