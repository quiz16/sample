var mysql      = require('mysql');
  var host = "localhost"; // url
  var db_username = "root"; // username
  var db_password = ""; // password
  var db_name = "college_connect"; // database name
  

module.exports = {
	browse: function (entry,table,col,callback){
		var table = table;
		var entry = entry;
		var col = col;
	  var connection = mysql.createConnection({
	    host     : host,
	    user     : db_username,
	    password : db_password,
	    database: db_name,
	  });
	  connection.connect();
	/*  console.log(entry);
	   console.log(table);
	    console.log(col);*/
	    console.log('Step 1');
	 connection.query("SELECT * FROM "+table+" WHERE "+col+"=" +entry, function(err, rows, fields) {
	console.log('Step 2');
	   //console.log(rows);
	   if(err) throw err;
	   callback(rows[0].username);
	   //console.log(rows);
	   return rows[0].username;
	  });
	 callback();
	 connection.end();
	 console.log('Step 3');
	}
}

