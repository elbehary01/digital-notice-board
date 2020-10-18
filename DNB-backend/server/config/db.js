const { connect, connection } = require('mongoose');
const { config } = require('dotenv');

const connectDB = async () => {
  config();
  const uri = process.env.DB_URI;
  try {
    await connect(uri, {
      // dbName: process.env.DB_NAME,
      // user: process.env.DB_USER,
      // pass: process.env.DB_PASS,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('MongoDB is Connected....');
  } catch (err) {
    console.error(err.message);
    // Exit process in Failure
    process.exit(1);
  }
};

module.exports = connectDB;