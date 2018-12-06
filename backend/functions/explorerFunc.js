module.exports = {
    mysql : require('mysql'),
       con : mysql.createConnection({
                host: "dwarves.iut-fbleau.fr",
                user: "jully",
                password: "toto77370",
                database: "jully"
            }),
    /*deleteSubNode: function(nodeName, subNodeID){
        var admin = require('firebase-admin') 
        var db = admin.database() 
        var nodeRef = db.ref(nodeName) 
        var subNodeRef = nodeRef.child(subNodeID) 

        subNodeRef.remove() 
    }, */
    addElementIntoExplorer: function(heartbeat, weight, body_temperature, longitude, latitude){
        var sql_req = "INSERT INTO Explorer (heartbeat, weight, body_temperature, latitude, longitude) VALUES ('" + heartbeat + "','" +  weight + "','" + body_temperature + "','" + longitude + "','" + latitude + "')" 
        this.con.query(sql_req, function(err, res) {
            if (err) throw err;
            console.log("New element added.")
        })
    }

    
};