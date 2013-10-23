var sql = require('./sql_functions');

exports.index = function(req, res){
  var data = {};
  data.title = "< >..T..raffix";
 data.sample= sql.browse('12','users','id',function(result){
  console.log('DATA: ' + result.username);

 });
 //console.log(data.sample);
  res.render("index", data);
  
};
