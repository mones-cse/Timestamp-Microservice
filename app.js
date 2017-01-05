var express =require('express');
var moment = require('moment');

var app =express();

app.set('port',(process.env.PORT|| 8080));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/info.html');
})

app.get('/:input',function(req,res){
    var isValidDate =moment(''+req.params.input).isValid();
    var isValidUnixDate =moment.unix(''+req.params.input).isValid();
    if(isValidDate || isValidUnixDate){
       if(isValidUnixDate){
        res.send('unix :'+req.params.input+' natural: '+moment.unix(''+req.params.input).format('MMM D YYYY'));
       }else{
         res.send('unix :'+moment(''+req.params.input).format('X')+' natural: '+req.params.input);  
       }
    }else{
        res.send('invalid date. Try again.');
    }
})


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});