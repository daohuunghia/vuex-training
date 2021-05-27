import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import auth from './modules/auth'

Vue.use(Vuex)

const storeData = {
    modules: {
        auth
    },
    state: {
        todos: []
    },
    getters: {
        doneTodos: state => {
            return state.todos.filter(todo => todo.completed)
        },
        progress: (state, getters) => {
            return Math.round((getters.doneTodos.length / state.todos.length) * 100)
        }
    },
    mutations: {
        MARK_TODO(state, todoId) {
            state.todos.map(todo => {
                if (todo.id === todoId) todo.completed = !todo.completed
            })

        },
        DELETE_TODO(state, todoId) {
            state.todos = state.todos.filter(todo => todo.id !== todoId)
        },
        ADD_TODO(state, todo) {
            state.todos.unshift(todo)
        },
        SET_TODO(state, data) {
            state.todos = data
        }
    },
    actions: {
        async deleteTodo({ commit }, todoId) {
            try {
                await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
                commit('DELETE_TODO', todoId)
            } catch (error) {
                console.log(error)
            }

        },
        addTodo({ commit }, todo) {
            axios.post('https://jsonplaceholder.typicode.com/todos', todo).then(response => {
                console.log(response)
                commit('ADD_TODO', todo)
            }).catch(e => {
                console.log(e)
            })

        },
        async getTodos({ commit }) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos/?_limit=10')
                commit('SET_TODO', response.data)
            } catch (error){
                console.log(error)
            }
        }
    }
}
const store = new Vuex.Store(storeData)
export default store