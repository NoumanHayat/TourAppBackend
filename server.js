const mongoose = require('mongoose'); 
const dotenv = require('dotenv');
const https= require('https');
const fs = require('fs');
const path = require('path');
process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app'); 

// const DB = process.env.DATABASE.replace(
//   '<PASSWORD>',
//   process.env.DATABASE_PASSWORD
// );
const DB="mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
console.clear();
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 3000;
const sslServer = https.createServer({
  key: fs.readFileSync('cert/key.pem'),
  cert:  fs.readFileSync('cert/cert.pem'),
},app)
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

process.on('unhandledRejection', err => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
