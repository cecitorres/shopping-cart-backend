const express = require('express');
const app = express();
const PORT = 5001;
const mongoose = require('mongoose');
const cors = require('cors');
const cloudinary = require("cloudinary").v2;

cloudinary.config({ 
    cloud_name: 'ceciliadev', 
    api_key: '748531396169686', 
    api_secret: 't-Jbpds3vKoY4FpC1YJkd3VNJ_Q' 
  });

const CartRoutes = require('./routes/cart');
const ProductRoutes = require('./routes/products');
// const UserRoutes = require('./routes/user');

require('dotenv').config();

const mongoURL = process.env.MONGDB_URL;

// We have app.use for introducing middlewares
app.use(express.json())

// Cors middleware asks the browser to allow resource sharing from different PORT Numbers
app.use(cors());

mongoose.connect(mongoURL, (error) => {
  if (error) {
      console.error(`There was an error connecting database, ${error}`);
  } else {
      console.log("Succefully connected to Database");
  }
})

app.use('/api/v1/cart', CartRoutes);
app.use('/api/v1/products', ProductRoutes);
// app.use('/api/v1/users', UserRoutes);

app.listen(PORT, (req, res) => {
    console.log(`Server running at port ${PORT}`);
})