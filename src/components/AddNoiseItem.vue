<script setup>

</script>

<template>
    <div>

        <p class="title"> Ajoute un bruit !</p>

        <form method="get" @submit.prevent="tryConnect">
            <div class="form-container">
                <div class="form-input-container">
                    <label for="titre">Titre du bruitage :</label>
                    <input type="text" name="titre" id="titre" class="form-input" placeholder="Titre">
                </div>
                <div class="form-input-container">
                    <label for="category">Catégorie(s) :</label>
                    <input type="checkbox" name="category" id="category" class="form-category-input">
                </div>
                <div class="form-input-container">
                    <label for="file" class="label-file">Choisir un bruit</label>
                    <input type="file" name="" id="file" class="input-file" @change="onFileChange">
                </div>
                <input type="submit" value="Envoyer" class="submit-btn">
            </div>
        </form>

    </div>
</template>

<style scoped lang="scss">

.title{
    display: flex;
    justify-content: center;
    font-size: 2rem;
}
.form-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .form-input-container {
        display: flex;
        flex-direction: column;
        margin: 15px;

        .form-input {
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

        .form-category-input {
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size: 16px;
            background-color: rgba($color: #000000, $alpha: 0.2);
            height: 50px;
            width: 50px;
            padding-left: 20px;
            border-radius: 15px;
            color: white;
            border: #4B4949 2px solid;
        }

        label {
            display: inline-block;
            font-size: 18px;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            margin-bottom: 10px;
        }
    }
}

.label-file {
    cursor: pointer;
    color: #ffffff;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 16px;
    text-align: center;
    background-color: rgb(103, 102, 102);
    padding: 15px;
    width: 200px;
    border-radius: 15px;
    color: white;
    border: #4B4949 2px solid;
}

.label-file:hover {
    background-color: rgb(107, 48, 202);
}

// et on masque le input
.input-file {
    display: none;
}

.submit-btn {
    margin-top: 60px;
    width: 260px;
    height: 60px;
    border-radius: 25px;
    background-color: rgba($color: #000000, $alpha: 0.2);
    color: white;
    border: #4B4949 solid 2px;
    cursor: pointer;

    &:hover {
        background-color: rgba($color: rgb(113, 182, 39), $alpha: 1);

    }
}
</style>