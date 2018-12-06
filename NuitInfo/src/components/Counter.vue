<template>
  <div>

      <h1> {{count}} </h1>
      <v-btn @click="increm"> + </v-btn>

  </div>
</template>

<script>
export default {
  name: 'Counter',
  data () {
    return {
      count: 0,
    }
  }, 
  methods: {
    increm: function(){
      this.count++

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  color: white;;
}

</style>
