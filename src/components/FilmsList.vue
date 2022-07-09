<template>
<div>
    <div class="nav is--dark">
        <div>
            <h3 class="logo">MovieBase</h3>
        </div>
        <div class="search-wrapp">
            <div class="search-bar">
                <div class="search"><a>Rechercher</a></div>
                <input class="search__input" type="text" placeholder="Rechercher un film" v-model="search">
            </div>
        </div><router-link v-bind:to="{ name:'new', params: { edit: false }}">Rajouter un film</router-link></div>
        <div class="section">
        <div class="container is--hero">
            <div>
                <h1>Liste des films</h1>
                <div class="separator is--dark"></div>
                <div class="films">
                    <film-component v-for="(movie, index) in displayMovies" v-bind:key="index" v-on:edit-movie="editMovie(index)" v-on:delete-movie="deleteMovie(index)" :movie="movie" :index="index"></film-component>
                </div>
            </div>
        </div>
        </div>
</div>
</template>

<script>
const defaultMovies = require('../defaultmovies.json');
import FilmComponent from './FilmComponent.vue';

export default {
    name: 'FilmsList',
    components: {
        FilmComponent
    },
    data () {
        return {
            search: "",
            refresher: false
        }
    },
    computed: {
        movies : function () {
            this.refresher;
            if(window.localStorage.getItem('movies')){
                return(JSON.parse(window.localStorage.getItem('movies')))
            }
            else {
                window.localStorage.setItem('movies', JSON.stringify(defaultMovies));
                return(defaultMovies);
            }
        },

        displayMovies : function () {
            return this.movies.filter( movie => {
                if((movie.date + '').includes(this.search) ||
                    movie.name.includes(this.search) ||
                    movie.director.firstName.includes(this.search) ||
                    movie.director.lastName.includes(this.search)) {
                        return movie
                    }
            })

        }

    },
    methods : {
        editMovie(index) {
            this.$router.push({name: "edit", params: {id: index,movie: this.movies[index], edit: true}})
        },

        deleteMovie(index) {
            this.movies.splice(index, 1)
            window.localStorage.setItem('movies', JSON.stringify(this.movies));
            this.refresher = !this.refresher
        }
    }
}
</script>

<style>

.nav {
  position: fixed;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: auto;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  height: 6em;
  padding-top: 2em;
  padding-right: 3.2em;
  padding-left: 3.2em;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.nav.is--dark {
  z-index: 10;
  height: auto;
  padding-bottom: 3em;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
}

.logo {
  font-weight: 500;
}

.search-wrapp {
  margin-right: 5em;
  margin-left: 5em;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

.search-bar {
  position: relative;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 1em;
  padding-bottom: 1em;
  padding-left: 8em;
  border-radius: 2em;
  background-color: #fff8eb;
  color: #160c28;
}

.search {
  position: absolute;
  left: 0%;
  top: 0%;
  right: auto;
  bottom: 0%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-right: 1em;
  padding-left: 1em;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border: 1px solid #fff8eb;
  border-top-left-radius: 2em;
  border-bottom-left-radius: 2em;
  background-color: #160c28;
}

.search__input {
    border: none;
    font: inherit;
    color: inherit;
    background: none;
    width: 100%;
}

.search__input:focus {
    outline: none;
}

.films {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding-top: 3em;
  -webkit-box-pack: justify;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: justify;
  justify-content: flex-start;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.film {
    position: relative;
    width: 27.5%;
    min-height: 30em;
    margin-right: 5%;
    margin-bottom: 5%;
    padding: 1em;
  }

  .film:nth-child(3n) {
    margin-right: 0px;
}
</style>