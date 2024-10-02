const express = require('express');
   const router = express.Router();
   const dpiController = require('../controllers/dpiController');

   router.get('/services', dpiController.getServices);
   router.post('/tutorial', dpiController.getTutorial);

   module.exports = router;