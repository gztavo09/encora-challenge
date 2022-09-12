import Vue from 'vue'
import Vuex from 'vuex'
import { parse } from '@/utils/storage'

Vue.use(Vuex)

const state = {
  todos: parse()
}

const mutations = {
  addTodo (state, todo) {
    state.todos.push(todo)
  },
  removeTodo (state, todo) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },
  editTodo (state, { todo, text = todo.text, done = todo.done }) {
    todo.text = text
    todo.done = done
  }
}

const actions = {
  addTodo (store, text) {
    store.commit('addTodo', {
      uid: Date.now(),
      text,
      done: false
    })
  },
  removeTodo (store, todo) {
    store.commit('removeTodo', todo)
  },
  toggleTodo (store, todo) {
    store.commit('editTodo', { todo, done: !todo.done })
  },
  editTodo (store, data) {
    
    store.commit('editTodo', { todo: data.todo, text: data.value })
  },
  toggleAll (store, done) {
    store.state.todos.forEach(function (todo) {
      return store.commit('editTodo', { todo, done })
    })
  },
  clearCompleted (store) {
    store.state.todos.filter(function (todo) { return todo.done })
      .forEach(function (todo) {
        return store.commit('removeTodo', todo)
      })
  }
}

const plugins = [function (store) {
  store.subscribe(function (mutation, data) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data.todos))
  })
}]

export default new Vuex.Store({
  state,
  mutations,
  actions,
  plugins
})
