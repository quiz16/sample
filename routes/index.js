var sql = require('./sql_functions');

exports.index = function(req, res){
  var data = {};
  data.title = "< >..T..raffix";
  sql.browse('12','users','id',function(result){

  data.sample = result;
  console.log('result: ' + data.sample);
  res.render("index.ejs", data);
 });
 //console.log(data.sample);
 
 
};
