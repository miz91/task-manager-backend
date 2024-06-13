require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const taskRoutes = require('./routes/taskRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());


const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://u2miz:idlJ541QYM5Q3QZX@cluster0.qykxagd.mongodb.net/<taskmanager>retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, 
  socketTimeoutMS: 45000, 
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

app.use('/api', taskRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
