// Dependencie
let express = require("express");
let mongoose = require("mongoose");
let routes = require("./routes");
let app = express();

// Setting up the port of the application
let PORT = process.env.PORT || 3005;


// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Adding routes, both API and view
app.use(routes);
// app.use(express.static("client/public"));


// Connecting to Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/google-books',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


  // .then(() => {
  //   console.log("🌎 ==> Successfully connected to mongoDB.");
// })
// .catch((err) => {
//   console.log(`Error connecting to mongoDB: ${err}`);
// });

// app.get("/api/saved-books", (request, response) => {
//   Book.find({})
//     .then(function (data) {
//       response.status(200).json(data);
//     })
//     .catch(function () {
//       response.status(404).end("Bad things, Mikey, bad things....");
//     });
// });

// app.delete("/api/books/:id", (request, response) => {
//   const mongoID = request.params.id;
//   Book.remove({
//     _id: mongoID,
//   })
//     .then((data) => {
//       response.status(200).end();
//     })
//     .catch((error) => {
//       response.status(404).send(error.message);
//     });
// });

// app.post("/api/books", (request, response) => {
//   const bookData = request.body;
//   Book.create(bookData)
//     .then(function () {
//       response.status(200).end();
//     })
//     .catch(function (error) {
//       response.status(404).send(error.message);
//     });
// });

// Starting the API server
app.listen(PORT, () => {
  console.log(`listening to ${PORT}!`);
});
  