//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');
let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"))
app.get("/", function(req, res){

// let currentDay = today.getDay();
// let day = "";

// if(currentDay == 6 ||currentDay ==0)
// {
//   day = "Weekend";
// }
// else
// {
//   day = "Weekday";
//   // res.send("Boo! I have to work!");
//   // res.sendFile(__dirname + "/index.html");
// }

// switch (currentDay) {
//   case 0:
//   day = "Sunday";
//     break;
//     case 1:
//   day = "Monday";
//     break;
//     case 2:
//   day = "Tuesday";
//     break;
//     case 3:
//   day = "Wednesday";
//     break;
//     case 4:
//       day = "Thursday";
//     break;
//     case 5:
//       day = "Friday";
//     break;
//   default:
//     day = "Saturday";

// }
// let today = new Date();
// let options =
// {
//   weekday: "long",
//   day: "numeric",
//   month: "long"
// };
// let day = today.toLocaleDateString("en-US", options);

let day = date.getDate();
res.render("list", {kindOfDay: day, newListItem: items });
});

app.post("/", function(req, res)
{
  let item=req.body.newItem;

  if(req.body.list == "Work")
  {
    workItems.push(item);
    res.redirect("/Work");
  }
  else
  {
    items.push(item);
    res.redirect("/");
  }
  
});

app.get("/work", function(req, res)
{
  res.render("list",{kindOfDay: "Work List",newListItem: workItems})
});

// app.post("/work", function(req, res)
// {
//   let item = req.body.newItem;
//   workItems.push(item);
//   res.redirect("/work");
// });

app.get("/about", function(req, res)
{
  res.render("about");
})

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});

