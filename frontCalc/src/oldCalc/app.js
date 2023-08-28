import { config } from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import axios from 'axios';

import cryptoRouter from './routes/v1/crypto.js';
import Transaction from './models/crypto.js';

config();

class UnauthorizedError extends Error {
  constructor(message = 'Unautorized user') {
    super(message);
    statusCode = 401;
  }
}

class ValidationError extends Error {
  constructor(message = 'Validation Error') {
    super(message);
    statusCode = 400;
  }
}

class App {
  constructor(PORT, MONGO_DB_URL) {
    this.PORT = PORT;
    this.MONGO_DB_URL = MONGO_DB_URL;
    this.count = 0;
  }

  async init() {
    mongoose.set('strictQuery', false);
    await mongoose
      .connect(this.MONGO_DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log('Connected to MongoDB'))
      .catch((err) => console.log(`DB connection error: ${err}`));

    if (!await Transaction.findOne()) {
      this.saveTransactions();
      this.initDB();
    }

    const app = express();

    app.use(express.json());

    app.use('/api/transactions', cryptoRouter);
    app.use((err, req, res, next) => {
      if (err instanceof UnauthorizedError) {
        res.status(err.statusCode).json({ message: err.message });
      }

      if (err instanceof ValidationError) {
        res.status(err.statusCode).json({ message: err.message });
      }
      res.status(500).json({ message: err.message });
    });
    
    app.listen(this.PORT, () => {
      console.log(`Server works on ${this.PORT}`);
    });
  };

  async saveTransactions() {
    const blockNumber = (await axios.get('https://api.etherscan.io/api?module=proxy&action=eth_blockNumber')).result;

    this.count++;

    setTimeout(async () => {
      const { transactions, timestamp } = (await axios.get(`https://api.etherscan.io/api?module=proxy&action=eth_getBlockByNumber&tag=${blockNumber}&boolean=true`)).result;
    
      for (const transaction of transactions) {
        const newTransaction = new Transaction({
          blockNumber: transaction.blockNumber,
          hash: transaction.hash,
          from: transaction.from,
          to: transaction.to,
          timestamp,
          value: transaction.value,
        });
    
        await newTransaction.save();
      }
    }, 5000);
  }

  initDB() {
    if (this.count === 3) {
      return;
    }

    setTimeout(async () => {
      await this.saveTransactions();
    }, 5000);

    this.initDB();
  }
}

const app = new App(
  process.env.PORT,
  'mongodb+srv://crypto:Daniilkurka1995CryptoDatabase!@crypto-database.l4vu1hz.mongodb.net/?retryWrites=true&w=majorit'
);
  
app.init();

// https://joi.dev/api/?v=17.9.1

// app.use((err, req, res, next) => res.status(500).json({message: err.message}));
