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


setInterval(function (){
 
  req = "SELECT heartbeat, body_temperature, weight, latitude, longitude FROM  Explorer ORDER BY id DESC LIMIT 1;"
  con.query(req, function(err, res){
    if(err) throw err
    res.forEach(function(data) {
      if(data.heartbeat > 50 && data.heartbeat < 200 || data.body_temperature > 37 && data.body_temperature < 50){
        heartbeat = data.heartbeat + globalFunc.getRandomInt(-20, 20)
        body_temperature = data.body_temperature + globalFunc.getRandomInt(-5, 5)
      }
      else{
        heartbeat = data.heartbeat+1
        body_temperature = data.body_temperature+1
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
         

       