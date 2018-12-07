<template>
  <v-card>

  <div id="clock">
    <p class="date">{{ date }}</p>
    <p class="time">{{ time }}</p>
  </div>

  </v-card>
</template>

<script>
export default {
  name: 'Clock',
  data () {
    return {
        date: '',
        time: '',
        interval: null
    }
  },

  methods: {
    updateClock: function(){
      var d = new Date();
      var datestring =
        ("0" + d.getDate()).slice(-2)
        + "/" + ("0"+(d.getMonth()+1)).slice(-2)
        + "/" + d.getFullYear()
      this.date = datestring;
      var timestring =
        ("0" + d.getHours()).slice(-2)
        + ":" + ("0" + d.getMinutes()).slice(-2)
        + ":" + ("0" + d.getSeconds()).slice(-2);
      this.time = timestring;
    }
  },

  mounted: function(){
    this.updateClock();
    this.interval = setInterval(function () {
      this.updateClock();
    }.bind(this), 1000);
  },
  beforeDestroy: function(){
   clearInterval(this.interval);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


#clock{
  margin:10px 25px;
}
.date{
  letter-spacing: 0.1em;
  font-size: 14px;
}
.time{
  letter-spacing: 0.05em;
  font-size: 34px;

}

</style>
