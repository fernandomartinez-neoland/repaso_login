import express from 'express'
<<<<<<< HEAD
import {LoginController} from '../controllers/user.controller.js'
// import { PruebaMiddleware } from '../services/token.service.js';
import {appMiddleware} from '../middleware/app.middleware.js'
=======
import {LoginController, validateTokenController, RegisterController} from '../controllers/user.controller.js'
>>>>>>> 0cf965408d41899ef67dbdbe927a64404d38cb59

const router= express.Router();
router.use(express.json())

<<<<<<< HEAD
router.post('/login', appMiddleware ,LoginController)

=======
router.post('/login', LoginController)
router.post('/register', RegisterController)
>>>>>>> 0cf965408d41899ef67dbdbe927a64404d38cb59


export default router