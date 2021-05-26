<template>
  <div class="navbar">
    <h1>My Vuex App Todos</h1>
    <ul>
      <li>Home</li>
      <li>About</li>
      <li v-if="auth.isAuthenticated">Total todo: {{ todos.length }}</li>
      <li v-if="auth.isAuthenticated"><a @click.prevent="TOGGLE_AUTH" href="">Logout</a></li>
      <li v-else><a @click.prevent="TOGGLE_AUTH" href="">Login</a></li>
    </ul>
  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['todos', 'auth'])
  },
  methods: {
    ...mapMutations(['TOGGLE_AUTH'])
  }
}
</script>
<style>
.navbar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}

.navbar ul {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
}
.navbar ul li {
  padding: 5px 10px;
  background: #0aa66e;
  margin: 1px;
}
</style>