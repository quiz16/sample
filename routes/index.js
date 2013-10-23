var sql = require('./example');

exports.index = function(req, res){
  var data = {};
  data.title = "< >..T..raffix";
  sql.load({'id' : '12'},function(err,result){

  data.sample = result;
  console.log('result: ' + data.sample);
 
 });
 console.log(data.sample);
 
  res.render("index", data);
};
