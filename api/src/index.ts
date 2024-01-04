import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';

const app = express();

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    app.use(express.json());

    app.use(router);

    app.listen(3000, () => {
      console.log('🚀 Server is running at http://localhost:3000');
    });
  })
  .catch(error => console.log(error));
