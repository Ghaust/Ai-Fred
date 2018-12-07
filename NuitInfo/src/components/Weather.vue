<template>
  <v-card>
  <div id="weather" v-cloak>
		<div v-if="loading">
			<h1>Loading...</h1>
		</div>
		<div id="content" v-else>
			<h2>{{location}}</h2>
			<h3>
				<span class="temp">{{temp}}&deg;F</span><br/>
			</h3>
      <h3>
				<span class="humidity">humidity: {{humidity}}&percnt;</span><br/>
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
        latitude:null,
        longitude:null,
        location:null,
        temp:null,
        humidity:null,
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

			axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&APPID=69d3cf86b46f19cf3e049339355533aa`)
			.then(res => {
				let weather = res.data;
				console.log('response',weather);
				this.location = weather.name;
				this.temp = weather.main.temp;
				this.desc = weather.weather[0].description;
        this.id = weather.weather[0].id;
        this.humidity = weather.main.humidity;
        this.getIcon();
        this.loading = false;
        

			})
			.catch(e => {
				console.error(e);
			});

    },
    getLocation: function() {
      if (!navigator.geolocation) {
        this.errorMsg = "Geolocation is not supported by your browser";
        this.city = this.errorMsg;
        console.warn(this.errorMsg);
        return;
      }
      console.log('Getting current position..');
      var options = {timeout:60000};
      navigator.geolocation.getCurrentPosition(this.success, this.error, options);
    },
    success: function(position) {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.latitude = parseFloat(this.latitude).toFixed(2);
      this.longitude = parseFloat(this.longitude).toFixed(2);

      this.loadWeather();
    },
    error: function(err) {
      this.errorMsg = "Unable to retrieve your location";
      this.city = this.errorMsg;
      
     
      console.warn(this.errorMsg);
    }
  },
  
  created : function(){

    this.getLocation();

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
