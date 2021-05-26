import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storeData = {
    state: {
        todos: [
            { id: 1, title: 'Todo 1', completed: true },
            { id: 2, title: 'Todo 2', completed: true },
            { id: 3, title: 'Todo 3', completed: false },
            { id: 4, title: 'Todo 4', completed: false },
            { id: 5, title: 'Todo 5', completed: false },
        ],
        auth: {
            isAuthenticated: true
        }
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
        TOGGLE_AUTH (state) {
            state.auth.isAuthenticated = !state.auth.isAuthenticated
        },
        MARK_TODO(state, todoId) {
            state.todos.map(todo => {
                if (todo.id === todoId) todo.completed = !todo.completed
            })

        },
        DELETE_TODO(state, todoId) {
            state.todos = state.todos.filter(todo => todo.id !== todoId)
        }
    },
    actions: {
        deleteTodo({ commit }, todoId) {
            commit('DELETE_TODO', todoId)
        }
    }
}
const store = new Vuex.Store(storeData)
export default store