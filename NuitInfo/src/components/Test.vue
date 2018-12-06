<template>
  <div>
    <v-card>
      <h1>{{ msg }}</h1>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      msg: 'Dashboard'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  color: tomato;
}

</style>
