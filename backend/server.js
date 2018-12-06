var express = require('express')
    app = express()


    server = app.listen(8080, function () {

        var host = server.address().address
        var port = server.address().port
      
        console.log("NotAlone listening at http://%s:%s", host, port)
      
      })