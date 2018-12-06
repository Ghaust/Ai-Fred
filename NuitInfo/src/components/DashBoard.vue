<template>
  <div class="hello">
   
       <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >
       

      <v-list dense>
        <v-list-tile >
        
        </v-list-tile>
      </v-list>
      
      
       <v-list dense>
       
         <!-- MenuList -->
        
      </v-list>

    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    </v-toolbar>
    
    <v-content >
      <v-container >
        <v-layout align-center justify-center >
         
         
          <!-- /CONTENT/ -->


        </v-layout>
      </v-container>
    </v-content>


    
  </div>
</template>

<script>

import Test from './Test'
import Counter from './Counter'
export default {
  name: 'DashBoard',
  components: { Test,Counter },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      drawer:false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
