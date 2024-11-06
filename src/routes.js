import { Router } from 'express';
import multer  from 'multer';
import multerConfig from './config/multer';
import authMiddleware from './app/middlewares/auth';

import { password } from './config/database';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProductsController from './app/controllers/ProductController';
import CategoryController from './app/controllers/CategoryController';
import OrderController from './app/controllers/OrderController';
import CreatePaymentIntentController from './app/controllers/stripe/CreatePaymentIntentController.js';


const routes = new Router();

const upload = multer(multerConfig);


routes.post('/users',UserController.store);
routes.post('/session',SessionController.store);

routes.use(authMiddleware); // será chamado por todas as rotas ABAIXO

routes.post('/products',upload.single('file'),ProductsController.store);
routes.get('/products',ProductsController.index);
routes.put('/products/:id',upload.single('file'),ProductsController.update);


routes.post('/categories',upload.single('file'),CategoryController.store);
routes.get('/categories',CategoryController.index);
routes.put('/categories/:id',upload.single('file'),CategoryController.update);

routes.post('/orders',OrderController.store);
routes.get('/orders',OrderController.index);
routes.put('/orders/:id',OrderController.update);

routes.post('/create-payment-intent', CreatePaymentIntentController.store);

export default routes;