import express from 'express';
import * as productController from '../controllers/productController.js';
import * as categoryController from '../controllers/categoryController.js';
import * as brandController from '../controllers/brandController.js';
import * as orderController from '../controllers/orderController.js';
import * as orderDetailController from '../controllers/orderDetailController.js';

const router = express.Router();

const mainRoutes = (app) => {
    // Product Routes
    router.get('/products', productController.getProducts);
    router.get('/products/:id', productController.getProductById);
    router.post('/products', productController.insertProduct);
    router.put('/products', productController.updateProduct);
    router.delete('/products/:id', productController.deleteProduct);

    // Category Routes
    router.get('/categories', categoryController.getCategories);
    router.get('/categories/:id', categoryController.getCategoryById);
    router.post('/categories', categoryController.insertCategory);
    router.put('/categories', categoryController.updateCategory);
    router.delete('/categories/:id', categoryController.deleteCategory);

    // Brand Routes
    router.get('/brands', brandController.getBrands);
    router.get('/brands/:id', brandController.getBrandById);
    router.post('/brands', brandController.insertBrand);
    router.put('/brands', brandController.updateBrand);
    router.delete('/brands/:id', brandController.deleteBrand);

    // Order Routes
    router.get('/orders', orderController.getOrders);
    router.get('/orders/:id', orderController.getOrderById);
    router.post('/orders', orderController.insertOrder);
    router.put('/orders', orderController.updateOrder);
    router.delete('/orders/:id', orderController.deleteOrder);

    // OrderDetail Routes
    router.get('/orderdetails', orderDetailController.getOrderDetails);
    router.get('/orderdetails/:id', orderDetailController.getOrderDetailById);
    router.post('/orderdetails', orderDetailController.insertOrderDetail);
    router.put('/orderdetails', orderDetailController.updateOrderDetail);
    router.delete('/orderdetails/:id', orderDetailController.deleteOrderDetail);

    app.use('/api/', router);
};

export default mainRoutes;
