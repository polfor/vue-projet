<template>
    <div class="section">
        <div class="container is--hero">
            <div>
                <h1 v-if="edit">Modifier un film</h1>
                <h1 v-if="!edit">Rajouter un film</h1>
                <div class="separator is--dark"></div>
                <FormComponent :movie="dataMovie" v-on:form-complete="processForm"/>
            </div>
        </div>
    </div>
</template>

<script>
import FormComponent from './FormComponent.vue'

export default {
    name: "EditComponent",
    props: {
        movie: Object,
        edit: Boolean
    },
    data () {
        return {
            dataMovie : this.movie
        }
    },
    components: {
        FormComponent
    },
    created () {
        if(!this.edit) {
            this.dataMovie = {
                name: "",
                genre: "",
                language: "",
                date: 0,
                poster: "",
                director : {
                    lastName: "",
                    firstName : "",
                    birth: "",
                    country: ""
                }
            }
        }
    },
    methods: {
        processForm(formMovie) {
            let movies = JSON.parse(window.localStorage.getItem('movies'))
            if(this.edit) {
                movies[this.$route.params.id] = formMovie;
                window.localStorage.setItem('movies', JSON.stringify(movies));
                this.$router.push('/')
            }
            else {
                movies.push(formMovie)
                window.localStorage.setItem('movies', JSON.stringify(movies));
                this.$router.push('/')
            }
        }
    }
}
</script>