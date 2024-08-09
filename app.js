const express = require('express');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
const dotenv=require('dotenv')

dotenv.config();
const app = express();

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/REST');

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

module.exports = app;
