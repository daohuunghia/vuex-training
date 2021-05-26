<template>
  <div class="todo-list">
    <h1>List</h1>
    <ul v-if="auth.isAuthenticated">
      <li v-for="todo in todos" :key="todo.id" :class="todo.completed ? 'completed' : ''">
        {{ todo.title }}
        <input type="checkbox" :checked="todo.completed" @change="MARK_TODO(todo.id)"/>
      </li>
    </ul>
    <p v-else class="text-center">Not authorised</p>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Todos',
  //C1:
  computed: {
    ...mapState(['todos', 'auth'])
  },
  //C2
  // computed: {
  //   todos () {
  //     return this.$store.state.todos
  //   },
  //   isAuthenticated () {
  //     return this.$store.state.auth.isAuthenticated
  //   }
  // },
  //C3
  // computed: mapState({
  //   todos: state => state.todos,
  //   isAuthenticated: state => state.auth.isAuthenticated
  // }),

  data() {
    return {
    }
  },
  methods: {
    ...mapMutations(['MARK_TODO'])
    // markTodoCompleted(todoId) {
    //   this.$store.commit('MARK_TODO', todoId)
    // }
  }
}
</script>
<style scoped>
.todo-list ul {
  padding: 0 10px 10px 10px;
  list-style-type: none;
}

.todo-list li {
  padding: 10px;
  cursor: pointer;
  margin: 10px 0;
  border-radius: 4px;
  background: rgb(240, 240, 240);
  color: black;
}
.todo-list li input[type='checkbox'] {
  -ms-transform: scale(2); /* IE */
  -moz-transform: scale(2); /* FF */
  -webkit-transform: scale(2); /* Safari and Chrome */
  -o-transform: scale(2); /* Opera */
  transform: scale(2);
  padding: 10px;
  float: right;
}

.todo-list li button {
  float: right;
  margin-right: 20px;
}

.todo-list li button:hover {
  cursor: pointer;
  background: red;
  color: white;
}

.todo-list li.completed {
  background: rgb(119, 218, 243);
}
</style>