const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const mongoURI = process.env.MONGODB_URI ||'mongodb://127.0.0.1:27017/taskmanager' ;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, // 5 seconds
  socketTimeoutMS: 45000, // 45 seconds
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

app.use('/api', taskRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
