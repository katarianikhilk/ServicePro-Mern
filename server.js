const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const passport = require("passport");
const cors = require('cors');
dotenv.config({path: './config/config.env'});

const users = require("./routes/api/users");
const apis = require("./routes/api");

const app = express();

// Bodyparser middleware
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 
app.use(cors());



// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true,useUnifiedTopology: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes

app.use("/api/users", users);
app.use("/", apis);

const service = require('./routes/service');
app.use('/service', service);
const review = require('./routes/review');
app.use('/review', review);
const feedback = require('./routes/feedback');
app.use('/feedback', feedback);
const dashboard = require('./routes/dashboard');
app.use('/dashboard', dashboard);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
