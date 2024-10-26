import express from 'express'
const router = express.Router();
import * as productController from '../controllers/productController.js'

const mainRoutes = (app) => {
    router.get('/Product', productController.getProduct);

    app.use('/api/', router)
}

export default mainRoutes;