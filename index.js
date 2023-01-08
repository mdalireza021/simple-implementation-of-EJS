import express from 'express';
import date from './date.js';
const app=express();
const PORT=3000;
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

var items=["drink coffee","eat food"];
app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
res.render('list',{current_date:date(), taskList:items});
})
app.post('/',(req,res)=>{

    items.push(req.body.task);
    res.redirect('/');

})
app.listen(PORT,()=>
{
    console.log('server is running on http://localhost:'+PORT);
})

