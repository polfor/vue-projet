<template>
    <div class="film">
            <div class="film__content">
                <div class="film__top">
                    <h5 class="film__name">{{ movie.name }}</h5>
                    <div class="separator is--film"></div>
                    <div class="film__data">{{ movie.genre }}</div>
                    <div class="film__data-wrap">
                        <div>{{ movie.language }}</div>
                        <div class="tiret"> - </div>
                        <div>{{ movie.date }}</div>
                    </div>
                </div>
                <div class="content__holder">
                    <div class="auteur__hover"><a v-on:click="auteurShown = !auteurShown" class="film__real">Réalisateur</a></div>
                    <div class="film__auteur" v-bind:class="{ 'is--open': auteurShown }">
                        <div class="auteur__name">{{ movie.director.firstName }} </div>
                        <div class="auteur__name">{{ movie.director.lastName }}</div>
                        <div class="separator is--film"></div>
                        <div>Né le {{ movie.director.birth }}</div>
                        <div>Pays : {{ movie.director.country }}</div>
                    </div>
                </div>
                <div>
                    <button class="button edit__button" v-on:click="emitEdit()">Editer</button>
                    <button class="button delete__button" v-on:click="emitDelete()">Supprimer</button>
                </div>
            </div>
            <img v-bind:src="movie.poster" loading="lazy" class="film__image" />
    </div>
</template>

<script>
    export default {
        name: 'FilmComponent',
        props: {
            movie: Object,
        },
        data () {
            return {
                auteurShown: false
            }
        },
        methods : {
            emitEdit() {
                this.$emit('edit-movie')
            },

            emitDelete() {
                this.$emit('delete-movie');
            }
        }
    }
</script>

<style>
    .separator.is--film {
        margin-bottom: 0.3em;
        background-color: #fff8eb;
    }

    

.film__content {
  position: relative;
  z-index: 2;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  width: 90%;
  height: 90%;
  padding: 1em;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: stretch;
  -webkit-align-items: stretch;
  -ms-flex-align: stretch;
  align-items: stretch;
  border-radius: 0.2em;
  background-color: rgba(55, 55, 55, 0.1);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.26);
  opacity: 0;
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);
  -webkit-transition: opacity 200ms cubic-bezier(.25, .46, .45, .94);
  transition: opacity 200ms cubic-bezier(.25, .46, .45, .94);
  color: #fff8eb;
}

.film__content:hover {
  opacity: 1;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.26);

}

.content__holder {
    display: flex;
    flex-direction: column;
    margin-top: auto;
    margin-bottom: auto;
}

.film__top {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  font-size: 1.1em;
}

.film__name {
  width: 100%;
  margin-bottom: 0.3em;
  font-size: 1.7em;
}

.film__data {
  margin-top: 0.2em;
  margin-bottom: 0.2em;
}

.film__data-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}

.tiret {
  margin-right: 0.2em;
  margin-left: 0.2em;
}

.auteur__name {
  display: inline;
}

.auteur__hover {
  width: 100%;
}

.film__real {
  border-bottom: #fff8eb 1px solid;
  cursor: pointer;
}

.film__auteur {
  overflow: hidden;
  width: auto;
  height: 0px;
  margin-top: 0.6em;
  margin-bottom: 2em;
  padding: 0em 1em;
  border-radius: 0.2em;
  background-color: rgba(18, 5, 41, 0.45);
  -webkit-transition: height 200ms cubic-bezier(.25, .46, .45, .94), padding-bottom 200ms cubic-bezier(.25, .46, .45, .94), padding-top 200ms cubic-bezier(.25, .46, .45, .94);
  transition: height 200ms cubic-bezier(.25, .46, .45, .94), padding-bottom 200ms cubic-bezier(.25, .46, .45, .94), padding-top 200ms cubic-bezier(.25, .46, .45, .94);
}

.film__auteur.is--open {
  height: auto;
  padding-top: 1em;
  padding-bottom: 1em;
  -webkit-transition: all 200ms cubic-bezier(.25, .46, .45, .94);
  transition: all 200ms cubic-bezier(.25, .46, .45, .94);
}

.film__image {
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;
  width: 100%;
  height: 100%;
  border-radius: 0.2em;
  -o-object-fit: cover;
  object-fit: cover;
}

.button {
    background-color: rgba(255, 255, 255, .15);
    color: inherit;
    font: inherit;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.26);
    border: none;
    padding: .5em;
    border-radius: .2em;
    margin-right: 1em;
    cursor: pointer;
}

</style>