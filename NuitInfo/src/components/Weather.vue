<template>
  <v-card>
  <div id="weather" v-cloak>
		<div v-if="loading">
			<h1>Loading...</h1>
		</div>
		<div id="content" v-else>
			<h1>{{location}}</h1>
			<h3>
				<span class="temp">{{temp}}&deg;</span><br/>
				{{desc}}

			</h3>
        <v-icon>{{icon}}</v-icon>
		</div>
	</div>

  </v-card>
</template>

<script>
export default {
  name: 'Weather',
  data () {
    return {
        loading:true,
        lat:null,
        lon:null,
        location:null,
        temp:null,
        id:null,
        desc:null,
        icon:null
    }
  },

  methods: {

    getIcon : function () {
        var weatherID = this.id;
        if (weatherID >= 200 && weatherID <= 232) {
          this.icon = 'wi-thunderstorm';
        } else if (weatherID >= 300 && weatherID <= 321) {
          this.icon = 'wi-sprinkle';
        } else if (weatherID >= 500 && weatherID <= 531) {
          this.icon = 'wi-rain';
        } else if (weatherID >= 600 && weatherID <= 622) {
          this.icon = 'wi-snow';
        } else if (weatherID >= 701 && weatherID <= 781) {
          this.icon = 'wi-train';
        } else if(weatherID == 800) {
          this.icon = 'wi-day-sunny';
        } else if (weatherID >= 801 && weatherID <= 804) {
          this.icon = 'wi-cloud';
        } else if (weatherID >= 900 && weatherID <= 962) {
          this.icon = 'wi-small-craft-advisory';
        } else {
          this.icon = '';
        }
    },


    loadWeather : function () {

			axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&APPID=69d3cf86b46f19cf3e049339355533aa`)
			.then(res => {
				let weather = res.data;
				console.log('response',weather);

				this.location = weather.name;
				this.temp = weather.weather[0].main;
				this.desc = weather.weather[0].description;
				this.id = weather.weather[0].id;
        this.getIcon();
				this.loading = false;

			})
			.catch(e => {
				console.error(e);
			});

		}
  },

  created : function(){
    this.lat = 48.866667;
    this.lon = 2.333333;
    //this.lat = 25;
    //this.lon = 15;
    this.loadWeather();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

p{
  color: aliceblue
}
#weather{
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
