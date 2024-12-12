import Vue from 'vue'
import Router from 'vue-router'
import AddBook from '@/views/AddBook.vue'
import EditBook from '@/views/EditBook.vue'
import BookDetail from '@/views/BookDetail.vue'
import HomeView from '@/views/HomeView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: HomeView },
    { path: '/add', component: AddBook },
    { path: '/edit/:id', component: EditBook },
    { path: '/book/:id', component: BookDetail }
  ]
})