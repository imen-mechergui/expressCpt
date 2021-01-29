var express=require('express')
var lodash=require('lodash')
const app=express()
const port = 5000;
var d=new Date()
app.listen(port,(err)=>{
    if((err)) console.log ("server not connecting")
    else console.log(`The server is running on port ${port}`);
});
   

app.use(express.static(__dirname +'/public'))

function logger(req,res,next){
    console.table({method: req.method, path: req.url})
    const date=new Date()
   if(date.getDay()===0||date.getDay()===6||date.getHours()<9||date.getHours()>17) {
       res.send(__dirname+'sorry we are clodesed ')
   } else
    next()
}
app.use(logger)




app.get('/', (req, res) => {

    res.sendFile(__dirname + '/public/home.html');
});
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html');
});
/*app.get('/service', (req, res) => {
    res.sendFile(__dirname + '/public/Services.html');
});*/
app.get('/services', (req, res) => {
    res.sendFile(__dirname + '/public/Services.html');
});


