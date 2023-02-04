const express = require('express');
const app = express();
const mongoose = require('mongoose');

const uri = 'mongodb+srv://dbadmin:yehtohonahetha@cluster0.4kv2mjn.mongodb.net/?retryWrites=true&w=majority'

// mongoose.connect(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("Connected to MongoDB");
// });


async function connectToMongoDB() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
   // console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToMongoDB().then(() => {
    // Your app code goes here
    console.log("Connected to MongoDB");
  });
  

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
