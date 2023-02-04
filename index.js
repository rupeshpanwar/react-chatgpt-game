const express = require('express');
const app = express();

const mongoose = require('mongoose');
const cors = require('cors');

app.use(cors());
app.use(express.json());


const uri = 'mongodb+srv://dbadmin:yehtohonahetha@cluster0.4kv2mjn.mongodb.net/?retryWrites=true&w=majority'

  function connectToMongoDB() {
  try {
     mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

 connectToMongoDB();
  
  // create a model


  const userSchema = new mongoose.Schema({
    username: String,
    password: String
  });
  
const User = mongoose.model('User', userSchema);


app.get('/', (req, res) => {
    res.send('Hello World!');
});

// POST endpoint to add a new user
app.post('/', async (req, res) => {
    try {
      const {username, password} = req.body;
      const user = new User({username, password});
      const result = await user.save();
      res.send({ message: 'User added successfully', result });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });


app.listen(3000, () => {
    console.log('Server listening on port 3000');
});

