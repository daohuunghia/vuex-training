<template>
  <div v-if="auth.auth.isAuthenticated" class="status-bar">
    <h3>Todos done</h3>
    <ul>
      <li v-for="todo in doneTodos" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'StatusBar',
  computed: {
    ...mapGetters(['doneTodos']),
    ...mapState(['auth'])
  }
}
</script>
<style>
.status-bar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}
</style>