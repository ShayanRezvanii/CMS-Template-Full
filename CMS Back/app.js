const express = require('express');

const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const path = require('path')
const configdb = require('./config/database')
const uploadPath = path.join(__dirname, './public/uploads');
const pageRouters = require('./router/page')
mongoose.set('strictQuery' , false)

app.use(cors({
  origin : 'http://localhost:3000'
}))

app.use(express.json())
app.use( '/public/uploads', express.static(uploadPath)) 
mongoose.connect( configdb.db , {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(res => console.log('Connected to Mongo-Database'))
.catch(err => console.log('Cannot connect to Mongo-Database' + err))


app.use('/api/pages/' , pageRouters);

const port = process.env.port || 8000;
const portAddress = 'http:\\\\localhost:' + port + '\\'
app.listen(port , () => {
  console.log(`Ready to run on ${port}`);
  
})
console.log();
console.log(portAddress);

exports.portAddress = portAddress