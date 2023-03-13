/*IMPORT DO PACOTE EXPRESS*/
const express = require("express");

/*INSTANCIA EXECUTAVEL DO EXPRESS*/
const app = express();

/*
CRIAÇÃO DO SERVIDOR HTTP:
PARAMETROS:
1 - PORTA LÓGICA
2 - CALLBACK: 
*/

// app.set("view engine", "ejs");

// app.use(express.static( __dirname + '/src'));

// app.get("/", function (req, res) {
//   //   res.send("Hello World!");

//   res.render("templates/index", {
//     pageTitle: 'First EJS',
//   });
// });

// app.get("/testGET", (req, res) => {
//   res.send("aafasfa");
// });
// app.get('/teste1', function (req, res){
//   res.send('hoje é segunda-feira')
// });
// app.post('/testePOST', function (req, res){
//   res.send('tefsfasste')
// });
// app.put('/testePUT', function (req, res){
//   res.send('teste PUT')
// });
// app.delete('/testeDEL', function (req, res){
//   res.send('teste DELETE')
// });

// Enable json in application
app.use(express.json());

// Enable application to manipulate data from data body 
app.use(express.urlencoded({extended:true}));

app.listen(3000, () => {
  console.log("SERVIDOR RODANDO EM - http://localhost:3000");
});
