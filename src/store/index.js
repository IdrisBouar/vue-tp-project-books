import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: []
  },
  mutations: {
    ADD_BOOK(state, book) {
      state.books.push(book)
    },
    UPDATE_BOOK(state, updatedBook) {
      const index = state.books.findIndex(book => book.id === updatedBook.id)
      if (index !== -1) {
        Vue.set(state.books, index, updatedBook)
      }
    },
    DELETE_BOOK(state, bookId) {
      state.books = state.books.filter(book => book.id !== bookId)
    }
  },
  actions: {
    addBook({ commit }, book) {
      book.id = Date.now().toString()
      commit('ADD_BOOK', book)
    },
    updateBook({ commit }, book) {
      commit('UPDATE_BOOK', book)
    },
    deleteBook({ commit }, bookId) {
      return new Promise((resolve) => {
        commit('DELETE_BOOK', bookId)
        resolve()
      })
    }
  }
})