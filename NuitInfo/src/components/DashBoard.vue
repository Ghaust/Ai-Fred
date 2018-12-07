<template>
<v-app :dark="dark">
  <div class="hello">

       <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
    >


      <v-list dense>

      </v-list>


       <v-list dense>

        <v-avatar tile size="200px" > <img src="../assets/logo.png" alt=""> </v-avatar>
        <v-switch :label="`Theme ${darkToString()}`" v-model="dark"></v-switch>
      </v-list>

    </v-navigation-drawer>
    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

    </v-toolbar>

    <v-content >
      <v-container >
        <v-layout align-center justify-center >


          <!-- /CONTENT/ -->  

          <div class="clock">
            <Clock></Clock>
          </div>

          <div class="weather">
            <Weather></Weather>
          </div>

          <div class="vitals">
            <Vitals></Vitals>
          </div>
        

          <div class="materials">
            <Materials></Materials>
          </div>

          <div class="todo">
              <Todo></Todo>
          </div>


        </v-layout>
      </v-container>
    </v-content>



  </div>
    </v-app>
</template>

<script>

import Clock from './Clock'
import Weather from './Weather'
import Materials from './Materials'
import Vitals from './Vitals'
import Todo from './Todo'

export default {
  name: 'DashBoard',
  components: { Clock, Weather, Vitals, Materials, Todo },

  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      drawer:false,
      dark:true
    }
  },
  methods:{
    darkToString:function(){
      if(this.dark){ return "sombre"}
      else{return "lumineux"}
    }
  }
}

</script>



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

.hello{
  position:relative;
}
.weather{
  position:absolute;
  top: 0px;
right:0px
}

.clock{
  position:absolute;
  top:500px;
  right:0px
}
.vitals{
  position:absolute;
  top:55%;
  left: 27%;
}
.materials{
  position:absolute;
  top:55%;
  right:15%;
}
.todo{
  position:absolute;
  top:0px;
  left:40px
}

</style>
