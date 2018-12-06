var express = require('express')
    app = express()
    mysql = require('mysql')
    /*con = mysql.createConnection({
        host: "dwarves.iut-fbleau.fr",
        user: "jully",
        password: "toto77370",
        database: "jully"
      });
    
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connexion succeeded!\n")
    })*/

    server = app.listen(8080, function () {

        host = server.address().address
        port = server.address().port
      
        console.log("\nNotAlone listening at http://%s:%s\n", host, port)
      
      })

//var explorerFunc = require('./functions/explorerFunc.js')

