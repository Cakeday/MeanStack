const express = require("express");
const app = express();

app.get('/', (request, response) => {
   response.send("Hello Express");
});


app.get("/cars", (req, res) => {
    res.render('cars');
})
app.get("/cats", (req, res) => {
    res.render('cats');
})
app.get("/cars/new", (req, res) => {
    res.render('form');
})



app.get("/cat1", (req, res) => {
   var cat1 = [
      {name: "cat1", food: "spaghetti", age: "3", sleep: ["under the bed", "in a sunbeam", "under the table"], image_source: "cats"}
   ]
   res.render('details', {cat: cat1});
})
app.get("/cat2", (req, res) => {
   var cat2 = [
      {name: "cat2", food: "tacos", age: "5", sleep: ["by the sofa", "in a towel", "on the roof"], image_source: "cat2"}
   ]
   res.render('details', {cat: cat2});
})
app.get("/cat3", (req, res) => {
   var cat3 = [
      {name: "cat3", food: "cake", age: "20", sleep: ["in the kitchen", "in a tree", "on the desk"], image_source: "cat3"}
   ]
   res.render('details', {cat: cat3});
})



app.use(express.static(__dirname + "/static"));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



app.listen(8000, () => console.log("listening on port 8000"));