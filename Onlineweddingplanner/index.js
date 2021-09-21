const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var Express = require('express');
 var multer = require('multer');
 var bodyParser = require('body-parser');
 const mysql = require('mysql');
 var session = require('express-session');
const ejs = require('ejs');
const { get } = require('http');
 

 var http = require('http');
 var fs = require('fs');

  router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/home.html'));
});




router.get('/home',function(req,res){
  res.sendFile(path.join(__dirname+'/home.html'));
}); 

var publicDir = require('path').join(__dirname,'/public'); 
app.use(express.static(publicDir)); 



http.createServer(function (req, res) {
  fs.readFile('home.html', function (err, html) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(html);
    res.end();

  });
})

router.get('/photogrphergallery',function(req,res){
  res.sendFile(path.join(__dirname+'/photogrphergallery.html'));
});

// router.get('/app',function(req,res){
//     res.sendFile(path.join(__dirname+'/app.js'));
//   });


  router.get('/choreographer',function(req,res){
    res.sendFile(path.join(__dirname+'/choreographer.html'));
  });

  router.get('/photogrerregister',function(req,res){
    res.sendFile(path.join(__dirname+'/photogrerregister.html'));
  });

  router.get('/makepayment',function(req,res){
    res.sendFile(path.join(__dirname+'/makepayment.html'));
  });
  router.get('/makeup',function(req,res){
    res.sendFile(path.join(__dirname+'/makeup.html'));
  });
  

  router.get('/decoration',function(req,res){
    res.sendFile(path.join(__dirname+'/decoration.html'));
  });
 
  router.get('/venue',function(req,res){
    res.sendFile(path.join(__dirname+'/venue.html'));
  });

  router.get('/userlogin',function(req,res){
    res.sendFile(path.join(__dirname+'/userlogin.html'));
  });

  router.get('/adminlogin',function(req,res){
    res.sendFile(path.join(__dirname+'/adminlogin.html'));
  });

  router.get('/usersignup',function(req,res){
    res.sendFile(path.join(__dirname+'/usersignup.html'));
  });
   
  router.get('/photog',function(req,res){
    res.sendFile(path.join(__dirname+'/photog.jpg'));
  });  
  

  router.get('/admin',function(req,res){
    res.sendFile(path.join(__dirname+'/admin.html'));
  });




  // app.use(express.static(__dirname + '/'));
  


//   let connection = mysql.createConnection({
//     host : "localhost",
//     user : "root",
//     password : "Amit@123",
//     database : "stud7"
// });

// //test the connection
// connection.connect(function(err){
//     if (err) throw err;
//     return console.log("Connected to DB...")
// });

//writing a middleware to setup view engine 
// app.set("views",path.join(__dirname,"views"));
// app.set("view engine","ejs");
// app.use(express.json());
// app.use(express.urlencoded({extended : true}));


let connection = mysql.createConnection({
  host : "localhost",
  user : "root",
  password : "Amit@123",
  database : "stud9"
});

//test the connection
connection.connect(function(err){
  if (err) throw err;
  return console.log("Connected to DB3...")
});





app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(express.json());
app.use(express.urlencoded({extended : true}));






// app.get('/adminsignup',(req,res)=>{
  
//   res.render("admin_up",{
//       title : "Student Application"
      
//   });
// });

app.get('/index',(req,res)=>{
res.render("user_index",{
title : "Add Student"
});
});

app.get('/adminhome',(req,res)=>{
    let sql = "SELECT * FROM userp";
    let qry = connection.query(sql,(err,rows)=>{
        if(err) throw err;
        res.render("user_index",{
            title : "Student Application"
            ,user : rows
        });
    });
});





app.get('/indexx',(req,res)=>{
  let sql = "SELECT * FROM userp";
  let qry = connection.query(sql,(err,rows)=>{
      if(err) throw err;
      res.render("user_index",{
          title : "Student Application"
          ,user : rows
      });
  });
});



app.get('/add',(req,res)=>{
    res.render("user_add",{
    title : "Add Student"
    });
});

// app.post("/save",(req,res)=>{
//   let data = {srno : req.body.srno, name: req.body.name, mobno: req.body.mobno, email : req.body.email ,address : req.body.address, amount :req.body.amount, date : req.body.date};
//   let sql = "INSERT INTO userp SET ?";
//   let qry = connection.query(sql,data,(err,rows)=>{
//       if(err) throw err;
//       res.redirect('/indexx');
//   });
// });


// app.get("/edit/:srno",(req,res)=>{
// const userrNo = req.params.srno;
//  let sql = "SELECT * FROM userp WHERE srno=?";
//  let qry = connection.query(sql,[userrNo],(err,rows)=>{
//        if(err) throw err;
//     res.render("user_edit",{
//            title : "Edit Student",
//            user: rows[0]
//        });
// });
// });



// app.post("/save_edit",(req,res)=>{ 
//   let sql = "UPDATE userp SET name = ? , mobno = ? ,email = ? ,address = ? ,amount = ? ,date =? WHERE srno = ?";
//   let qry = connection.query(sql,[req.body.name,req.body.mobno,req.body.email,req.body.address,req.body.amount ,req.body.date ,req.body.srno],(err,rows)=>{
//       if(err) throw err;
//       res.redirect('/indexx');
//   });
// });


// app.get("/delete/:srno",(req,res)=>{
//   let sql = "DELETE FROM userp WHERE srno = ?";
//   let qry = connection.query(sql,[req.params.srno],(err,rows)=>{
//       if(err) throw err;
//       res.redirect('/indexx');
//   });
// });









app.get('/photog',(req,res)=>{
  let sql = "SELECT * FROM userp";
  let qry = connection.query(sql,(err,rows)=>{
      if(err) throw err;
      res.render("photograph_add",{
          title : "Student Application"
          ,user : rows
      });
  });
});

app.get('/addx',(req,res)=>{
  res.render("photograph_add",{
  title : "Add Student"
  });
});


app.post("/savex",(req,res)=>{
  let data = { name: req.body.name, mobno: req.body.mobno, email : req.body.email ,address : req.body.address, amount :req.body.amount ,date :req.body.date};
  let sql = "INSERT INTO userp SET ?";
 let qry = connection.query(sql,data,(err,rows)=>{
      if(err) throw err;
      res.redirect('/indexx');
  });
  });





  app.get("/edit/:id",(req,res)=>{
    const userrNo = req.params.id;
     let sql = "SELECT * FROM userp WHERE id=?";
     let qry = connection.query(sql,[userrNo],(err,rows)=>{
           if(err) throw err;
        res.render("user_edit",{
               title : "Edit Student",
               user: rows[0]
           });
    });
    });

    app.post("/save_editx",(req,res)=>{ 
      let sql = "UPDATE userp SET name = ? , mobno = ? ,email = ? ,address = ? ,amount = ? ,date =?   WHERE id = ?";
      let qry = connection.query(sql,[req.body.name,req.body.mobno,req.body.email,req.body.address,req.body.amount ,req.body.date,req.body.id],(err,rows)=>{
          if(err) throw err;
          res.redirect('/indexx');
      });
    });


    app.get("/delete/:id",(req,res)=>{
      let sql = "DELETE FROM userp WHERE id = ?";
      let qry = connection.query(sql,[req.params.id],(err,rows)=>{
          if(err) throw err;
          res.redirect('/indexx');
      });
    });




    app.get('/photograph',(req,res)=>{
      let sql = "SELECT * FROM userp";
      let qry = connection.query(sql,(err,rows)=>{
          if(err) throw err;
          res.render("photograph_add",{
              title : "Student Application"
              ,user : rows
          });
      });
    });
    
    app.get('/addxxx',(req,res)=>{
      res.render("photograph_add",{
      title : "Add Student"
      });
    });
    
    
    app.post("/savexxx",(req,res)=>{
      let data = { name: req.body.name, mobno: req.body.mobno, email : req.body.email ,address : req.body.address, amount :req.body.amount ,date :req.body.date};
      let sql = "INSERT INTO userp SET ?";
     let qry = connection.query(sql,data,(err,rows)=>{
          if(err) throw err;
          res.redirect('/photograph');
      });
      });
    


  // app.get('/usersignup',(req,res)=>{
  //   let sql = "SELECT * FROM users";
  //   let qry = connection.query(sql,(err,rows)=>{
  //       if(err) throw err;
  //       res.render("usersign_up",{
  //           title : "Student Application"
  //           ,user : rows
  //       });
  //   });
  // });
  
  app.get('/usersignup',(req,res)=>{
    res.render("usersignup_addd",{
    title : "Add Student"
    });
  });
  
  // app.post("/savee",(req,res)=>{
  //   let data = {name : req.body.name, email: req.body.email, mobno: req.body.mobno, address : req.body.address ,password : req.body.password};
  //   let sql = "INSERT INTO userr SET ?";
  //   let qry = connection.query(sql,data,(err,rows)=>{
  //       if(err) throw err;
  //       res.redirect('/');
  //   });
  //   });








app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));


app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.get('/userlogin', function(request, response) {
	response.sendFile(path.join(__dirname + '/userlogin.html'));
});


app.use('/', router);
app.listen(process.env.port || 5000);

console.log('Running at Port 5000');