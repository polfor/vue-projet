import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import FilmsList from './components/FilmsList.vue'
import EditComponent from './components/EditComponent.vue'

Vue.use(VueRouter);

Vue.config.productionTip = false


const routes = [{
    path: '/',
    name: "home",
    component: FilmsList
}, {
    path: '/:id/edit',
    name: "edit",
    component: EditComponent,
    props: true
}, {
    path: '/new',
    name: "new",
    component: EditComponent,
    props: true
}
]

const router = new VueRouter({
    routes,
    props: {
        default: true
    }
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')