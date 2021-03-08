const { Router } = require('express')
const productsRouter = require('./products');
const usersRouter = require('./users');

const router = Router();
router.get('/', (req, res) => res.send('This is the API root!'))
router.use('/', usersRouter);
router.use('/products', productsRouter);

module.exports = router;