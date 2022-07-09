<template>
<div>
    <h2>Nom du Film</h2>
    <input type="text" v-model="movieData.name" placeholder="Nom du Film" >
    <h2>Lien vers le poster du Film</h2>
    <input type="text" v-model="movieData.poster" placeholder="Lien vers le poster du Film" >
    <h2>Genre du Film</h2>
    <input type="text" v-model="movieData.genre" placeholder="Genre du Film" >
    <h2>Année de Sortie du Film</h2>
    <input type="number" v-model="movieData.date" placeholder="Année de Sortie du Film" >
    <h2>Langue du Film</h2>
    <input type="text" v-model="movieData.language" placeholder="Langue du Film (Abbrégé)" >
    <h2>Nom de Famille du Réalisateur</h2>
    <input type="text" v-model="movieData.director.lastName" placeholder="Nom de Famille du Réalisateur" >
    <h2>Prénom du Réalisateur</h2>
    <input type="text" v-model="movieData.director.firstName" placeholder="Prénom du Réalisateur" >
    <h2>Date de Naissance du Réalisateur</h2>
    <input type="text" v-model="movieData.director.birth" placeholder="Date de Naissance du Réalisateur (ex: 18 janvier 2000)" >
    <h2>Pays d'origine du Réalisateur</h2>
    <input type="text" v-model="movieData.director.country" placeholder="Pays d'origine du Réalisateur" >

    (tous les champs doivent être renseignés)
    <button v-on:click="sendData">Valider</button>
</div>
</template>

<script>
    export default {
        name: "FormComponent",
        props: {
            movie: Object
        },
        data () {
            return {
                movieData: this.movie
            }
        },
        methods : {
            sendData() {
                if(
                    this.movieData.name.length &&
                    this.movieData.poster.length &&
                    this.movieData.genre.length &&
                    this.movieData.language.length &&
                    this.movieData.director.lastName.length &&
                    this.movieData.director.firstName.length &&
                    this.movieData.director.birth.length &&
                    this.movieData.director.country.length && 
                    this.movieData.date >= 0
                ) {
                    this.$emit('form-complete', this.movieData);
                }
            }
        }
    }
</script>

<style scoped>
input {
    width: 100%;
    background: none;
    font: inherit;
    color: inherit;
    border: 1px #160c28 solid;
    border-radius: 1em;
    padding: .5em;
}

button {

    background-color: #160c28;
    color: #fff8eb;
    font: inherit;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.26);
    border: none;
    padding: .5em;
    border-radius: .2em;
    margin-right: 1em;
    cursor: pointer;
    display: block;

}
</style>