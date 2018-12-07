<template>
  <v-card>

  <div id="Materials">
  <h1>Materiel </h1><br>
  <table>
        <tr v-for="material in materials">
            <td><v-icon> {{getIcons(material.name)}}</v-icon> </td>
            <td v-for="(item, index) in material">
                <div class="td" v-if="index == 'battery'"><progress max="100" :value="item"></progress></div>
                <div class="td bold" v-else-if="item != 'OK' && index=='status'" style="color:red">{{item}}</div>
                <div class="td bold" v-else >{{item}}</div>
            </td>

        </tr>
    </table>
  </div>

  </v-card>
</template>

<script>
export default {
  name: 'Materials',
  data () {
    return {
        date: '',
        time: '',
        interval: null,
        materials:null
    }
  },

  methods: {
    updateMaterials: function(){

        axios.get(`http://54.36.117.31:8080/Material/getTechnicalInfos`)
			.then(res => {
				this.materials = res.data;
            });
    },

    progressColor : function () {
        var bars = document.getElementsByTagName("progress");
        for (var i = 0; i < bars.length; i++) {
            if (bars[i].value < 25 ) {
                bars[i].setAttribute("class", "red");
            } else if (bars[i].value < 60) {
                bars[i].setAttribute("class", "orange");
            }
        }
    },

    getIcons : function (name) {
        var dic = { "Solar Panel":"fas fa-solar-panel", "Wind Turbine":"fas fa-wind", "Robot":"fas fa-robot", "Drone":"fas fa-helicopter", "Radio":"radio", "Phone":"phone_iphone"  };
        return dic[name];
    }

  },

  mounted: function(){
    this.updateMaterials();
    this.progressColor();
    this.timer = setInterval(this.updateMaterials, 1000);
    this.timer = setInterval(this.progressColor, 1000);
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


#Materials{
  margin:10px 25px;
}

.date{
  letter-spacing: 0.1em;
  font-size: 14px;
}

progress {
  border-radius: 2px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset;
}

.bold {
    font-weight : bold;
}

.orange::-webkit-progress-value {
  background: orange;
}

.red::-webkit-progress-value {
  background: red;
}



.td{
  margin : 20px !important;
  }

</style>
