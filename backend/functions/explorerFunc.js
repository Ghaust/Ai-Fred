
var mysql = require('mysql')
    con = mysql.createConnection({
        host: "dwarves.iut-fbleau.fr",
        user: "jully",
        password: "toto77370",
        database: "jully"
    })
    /*deleteSubNode: function(nodeName, subNodeID){
        var admin = require('firebase-admin') 
        var db = admin.database() 
        var nodeRef = db.ref(nodeName) 
        var subNodeRef = nodeRef.child(subNodeID) 

        subNodeRef.remove() 
    }, */
     function addElementIntoExplorer(heartbeat, weight, body_temperature, longitude, latitude){
        var mysql = require('mysql')
            
    }
    
    module.exports = explorerFunc;