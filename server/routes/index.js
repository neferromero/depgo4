const express = require ('express');
const router = express.Router();

// Add the required routes - traer las rutas 



router.use('/properties', requiere ('./Properties')); 
router.use('/payments', requiere ('./Payments')); 
router.use('/users', requiere ('./Users')); 
router.use('/reviews', requiere ('./Reviews'));


module.exports = router;