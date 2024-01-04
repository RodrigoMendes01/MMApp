import { Router } from 'express';

import UserController from './app/controllers/UserController';
import ProductController from './app/controllers/ProductController';

export const router = Router();

//CATEGORIES
router.get('/profile', UserController.index);
router.post('/profile', UserController.store);
router.patch('/profile/:id', UserController.update);
router.delete('/profile/:id', UserController.delete);

//PRODUCTS
router.get('/products', ProductController.index);
router.post('/products', ProductController.store);
//router.delete('/products/:productId', ProductController.delete);
//router.get('/products/:productId', ProductController.show);
