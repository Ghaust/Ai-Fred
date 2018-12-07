<template>
  <div>
    <v-card>
      <v-container fluid grid-list-md>
      <v-layout row wrap>
        
        <v-flex d-flex xs3 sm3 md3>
          
          <v-layout justify-space-between row wrap>
            <v-flex d-flex>
              <div>

                <v-icon color="error">favorite</v-icon>
                <p>{{bpm}} Bpm</p>
              </div>
              
            </v-flex>
            <v-flex d-flex>
              <div>

                <v-icon color="info">get_app</v-icon>
                <p>{{weight}} Kg</p>
              </div>
              
            </v-flex>
            

          </v-layout>
        </v-flex>


         <v-flex d-flex xs5 sm5 md5 >
          <div class="human"></div>        
        </v-flex>

        <v-flex d-flex xs3 sm3 md3>
          <v-layout align-start justify-space-between column fill-height>
              <v-flex d-flex>
              <div>

                <v-icon color="warning">waves</v-icon>
                <p>{{temperature}} &deg;</p>
              </div>
              
            </v-flex>
            <v-flex d-flex>
                <div>


                  <v-card>  
                <span>
                  lat:<p>{{latitude}} &deg;</p>
                </span>
             
                      
                <span>  
                  long:<p>{{longitude}} &deg;</p> 
                </span>
              </v-card> 
                </div>
            </v-flex>
            

          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>

      </v-card>
  
  </div>
</template>

<script>
export default {
  name: 'Vitals',
  data () {
    return {
      bpm:107, 
      weight:80,
      temperature:35,
      latitude:false,
      longitude:false
    }
  },
  methods:{
    loadVitals : function () {

			axios.get("http://54.36.117.31:8080/Explorer/getHealthParameters")
			.then(res => {
        var values = res.data[0]

        //fetch//
        this.bpm = values.heartbeat
        this.weight = values.weight
        this.temperature = values.body_temperature

			})
			.catch(e => {
				console.error(e);
			});

    },

    getLocation: function() {
      if (!navigator.geolocation) {
        this.errorMsg = "Geolocation is not supported by your browser";
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

    },
    error: function(err) {
      this.errorMsg = "Unable to retrieve your location";

      
     
      console.warn(this.errorMsg);
    }
  
  },
  created : function(){

    this.getLocation();

  },
  mounted(){
      this.loadVitals();
      this.timer = setInterval(this.loadVitals, 1000)
    }, 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.human{
  background-image: url("../assets/human.png");
  background-size: cover;
  background-position: top;
  height: 400px;
  width: 100px;
}

p{
  font-size: 28px;
  margin-top:10px ;
  font-weight: bold
}
</style>
