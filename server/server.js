//DEPENDENCIES 
const express = require('express');
const app = express();
const { Sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors');
const methodOverride = require('method-override')

//config //middleware
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../build')))
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

//controllers
const bucketController = require('./controllers/bucket_controller.js')
app.use('/api', bucketController)

//LISTEN
app.listen(4005, () => {
    console.log('Server is running on port 4005');
})

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../build/index.html'))
})

//command to run the server node server/server.js

//final command to finish project   npm run build