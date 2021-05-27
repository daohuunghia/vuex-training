<template>
  <form>
    <div class="form-group">
      <label>Todo</label>
      <input type="text" v-model="title" class="form-control mb-3" name="title">
    </div>
    <button type="submit" @click.prevent="onSubmit" class="btn btn-primary">Submit</button>
  </form>
</template>
<script>
import { v4 as uuidv4 } from 'uuid'
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      title: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']), // addTodo() === this.$store.dispatch('addTodo')
    onSubmit () {
      this.addTodo({
        id: uuidv4(),
        title: this.title,
        completed: false
      })
    }
  }
}
</script>