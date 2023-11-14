<script setup>
import AddNoiseItem from '../components/AddNoiseItem.vue';
import Header from '../components/Header.vue';
import {multer} from 'multer';

// Configuration de Multer
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/'); // Le dossier où les fichiers seront stockés
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Nom du fichier sur le serveur
  }
});

const upload = multer({ storage: storage });


</script>

<template>
    <Header/>
    <div>
        <AddNoiseItem/>
    </div>
</template>