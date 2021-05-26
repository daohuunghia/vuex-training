<template>
  <div>
    <p class="progress-bar">
      Progress bar: {{ progress }} %
    </p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['progress'])
  }
}
</script>
<style>
.progress-bar {
  padding: 5px;
  text-align: center;
  background: rgb(106, 248, 118);
  color: black;
}
</style>