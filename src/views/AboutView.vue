<script setup>
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'

const scrollToSection = (e) => {
  const section = document.getElementById(e);
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: 'smooth'
    });
  }
};

</script>

<template>

    <Header/>

    <div class="about-container">
        <img src="@/assets/images/cat.png" alt="" class="img-bang">

        <div>

            <h1>NoyzBox, c’est quoi ?</h1>

            <a href="#pourquoi" @click.prevent="scrollToSection('pourquoi')">Pourquoi Noyz Box ?</a>
            <a href="#qui" @click.prevent="scrollToSection('qui')">Qui sommes nous ?</a>
            <a href="#nouslie" @click.prevent="scrollToSection('nouslie')">Ce qui nous lie ?  (notre amour du son, lol)</a>
            <a href="#comment" @click.prevent="scrollToSection('comment')">Comment nous avons pensé le projet ?</a>
 


        </div>
    </div>


            <div class="text-container-about" id="pourquoi">

                <h2>Pourquoi Noyz Box ? </h2>


                <div class="para-text-container-about">

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam doloribus voluptatem porro rerum itaque, id fugit cumque libero autem quo quos soluta placeat doloremque at eaque distinctio sequi, beatae laboriosam!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta possimus eum culpa, asperiores est alias nemo. Aspernatur sapiente fugit iure labore dignissimos asperiores vitae consectetur possimus, doloribus pariatur itaque mollitia?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vero maiores optio totam mollitia modi obcaecati porro molestiae voluptas repellat! Commodi, vel inventore qui quaerat possimus quod nemo officiis. Sed.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, amet explicabo voluptatem labore saepe animi veniam voluptate tempora, fuga tempore pariatur officiis ipsam modi suscipit natus excepturi. Enim, sapiente repudiandae.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime vitae temporibus voluptatum quis veritatis dolor vel incidunt dolorum autem aliquam, explicabo eaque! Exercitationem nam perferendis molestiae eius qui voluptatibus eos!</p>

                </div>
            </div>
            <div class="text-container-about" id="qui">

                <h2>Qui sommes-nous ? </h2>


                <div class="para-text-container-about">

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam doloribus voluptatem porro rerum itaque, id fugit cumque libero autem quo quos soluta placeat doloremque at eaque distinctio sequi, beatae laboriosam!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta possimus eum culpa, asperiores est alias nemo. Aspernatur sapiente fugit iure labore dignissimos asperiores vitae consectetur possimus, doloribus pariatur itaque mollitia?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vero maiores optio totam mollitia modi obcaecati porro molestiae voluptas repellat! Commodi, vel inventore qui quaerat possimus quod nemo officiis. Sed.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, amet explicabo voluptatem labore saepe animi veniam voluptate tempora, fuga tempore pariatur officiis ipsam modi suscipit natus excepturi. Enim, sapiente repudiandae.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime vitae temporibus voluptatum quis veritatis dolor vel incidunt dolorum autem aliquam, explicabo eaque! Exercitationem nam perferendis molestiae eius qui voluptatibus eos!</p>

                </div>
            </div>
            <div class="text-container-about" id="nouslie">

                <h2>Ce qui nous lie ? </h2>


                <div class="para-text-container-about">

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam doloribus voluptatem porro rerum itaque, id fugit cumque libero autem quo quos soluta placeat doloremque at eaque distinctio sequi, beatae laboriosam!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta possimus eum culpa, asperiores est alias nemo. Aspernatur sapiente fugit iure labore dignissimos asperiores vitae consectetur possimus, doloribus pariatur itaque mollitia?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vero maiores optio totam mollitia modi obcaecati porro molestiae voluptas repellat! Commodi, vel inventore qui quaerat possimus quod nemo officiis. Sed.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, amet explicabo voluptatem labore saepe animi veniam voluptate tempora, fuga tempore pariatur officiis ipsam modi suscipit natus excepturi. Enim, sapiente repudiandae.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime vitae temporibus voluptatum quis veritatis dolor vel incidunt dolorum autem aliquam, explicabo eaque! Exercitationem nam perferendis molestiae eius qui voluptatibus eos!</p>

                </div>
            </div>
            <div class="text-container-about" id="comment">

                <h2>Comment nous avons pensé le projet ? </h2>


                <div class="para-text-container-about">

                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam doloribus voluptatem porro rerum itaque, id fugit cumque libero autem quo quos soluta placeat doloremque at eaque distinctio sequi, beatae laboriosam!</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta possimus eum culpa, asperiores est alias nemo. Aspernatur sapiente fugit iure labore dignissimos asperiores vitae consectetur possimus, doloribus pariatur itaque mollitia?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vero maiores optio totam mollitia modi obcaecati porro molestiae voluptas repellat! Commodi, vel inventore qui quaerat possimus quod nemo officiis. Sed.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, amet explicabo voluptatem labore saepe animi veniam voluptate tempora, fuga tempore pariatur officiis ipsam modi suscipit natus excepturi. Enim, sapiente repudiandae.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime vitae temporibus voluptatum quis veritatis dolor vel incidunt dolorum autem aliquam, explicabo eaque! Exercitationem nam perferendis molestiae eius qui voluptatibus eos!</p>

                </div>
            </div>

    <Footer/>

</template>

<style scoped lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
.about-container{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 100px;
    flex-direction: row;

    .img-bang{
        opacity: 0.2;
    }
    h1{
        font-size: 32px;
    }
    a{
        font-size: 20px;
        text-decoration: none;
        color: white;
        &:hover{
            opacity: 0.8;
        }
    }
    div{
        display: flex;
        flex-direction: column;
    }
}

.text-container-about{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .para-text-container-about{
        max-width: 600px;
        font-size: 20px;
        text-align: center;
        p{
            font-family: 'Poppins',Verdana, Geneva, Tahoma, sans-serif;
        }
    }
}


</style>