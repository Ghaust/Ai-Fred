var express = require('express')
    app = express()
    mysql = require('mysql')
    bodyParser = require('body-parser')
    con = mysql.createConnection({
      host: "dwarves.iut-fbleau.fr",
      user: "jully",
      password: "toto77370",
      database: "jully"
    }),
    globalFunc = require('./globalFunc.js')

    server = app.listen(8080, function () {

        host = server.address().address
        port = server.address().port
      
        console.log("\nXplorer listening at http://%s:%s\n", host, port)
      
      })

      
      app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*")
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
        next()
      })

setInterval(function (){
 
  req = "SELECT heartbeat, body_temperature, weight, latitude, longitude FROM  Explorer ORDER BY id DESC LIMIT 1;"
  con.query(req, function(err, res){
    if(err) throw err
    res.forEach(function(data) {
      randheart = globalFunc.getRandomInt(-20, 20);
      randtemp = globalFunc.getRandomInt(-5, 5);
      if((data.heartbeat >= 50+(randheart)) || (data.heartbeat+(randheart) <= 200 )){
        heartbeat = data.heartbeat + randheart
      } else {
        heartbeat = data.heartbeat
      }

      if((data.body_temperature >= 37+randtemp) || (data.body_temperature <= 50+randtemp)) {
           body_temperature = data.body_temperature + randtemp
      } else {
        body_temperature = data.body_temperature
      }
      console.log("HTTP PUT Request : Add ")
      sql_req = "INSERT INTO Explorer (heartbeat, weight, body_temperature, latitude, longitude) VALUES ('" + heartbeat + "','" 
      +  data.weight + "','" + body_temperature +  "','" + data.longitude + "','"
      + data.latitude + "');" 
      this.con.query(sql_req, function(err, res) {
      if (err) throw err
      console.log("New element added.")
      })
    });

})
},1000);



app.post('/Explorer/insertPos', function(req, resultat){
  console.log("HTTP POST Request : Get Health Parameters")

  sql_req = "UPDATE Explorer SET longitude =" + req.body.longitude + ", latitude=" + req.body.latitude + ";"
  con.query(sql_req, function(err, res) {
      if (err) throw err
      console.log("Position edited.")

  })
})

app.get('/Explorer/getHealthParameters', function (req, resultat){
  console.log("HTTP GET Request : Get Health Parameters")

  sql_req = "SELECT heartbeat, body_temperature, weight FROM  Explorer ORDER BY id DESC LIMIT 1"
  con.query(sql_req, function(err, res){
    if (err) throw err
    resultat.send(res)      

   })
       
})

//Getters pour récupérer les infos
app.get('/Material/getTechnicalInfos', function (req, resultat){
  console.log("HTTP GET Request : Get Material Infos")
  sql_req = "SELECT name, status, battery FROM  Material;"
  con.query(sql_req, function(err, res){
    if (err) throw err
    resultat.send(res) 

   })
       
})

app.get('/Equipment/getTechnicalInfos', function (req, resultat){
  console.log("HTTP GET Request : Get Equipment Infos")
  sql_req = "SELECT name, taken, status FROM  Equipment;"
  con.query(sql_req, function(err, res){
    if (err) throw err
    resultat.send(res)   

   })
  
  })

  app.get('/Stock/getTechnicalInfos', function (req, resultat){
    console.log("HTTP GET Request : Get Stock Infos")
    sql_req = "SELECT name, quantity FROM  Stock;"
    con.query(sql_req, function(err, res){
      if (err) throw err
      resultat.send(res)   

     })
   })
         

app.get('/Material/alertBattery', function(req, resultat){
  console.log("HTTP GET : Get Alert Battery")
  sql_req = "SELECT name from Material where battery<40;"
  con.query(sql_req, function(err, res){
    if(err) throw err
    console.log(res)
  })
})

app.get('/Material/statusBattery', function(err, req){

})