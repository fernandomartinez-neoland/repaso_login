import express from 'express'
import {LoginController, RegisterController} from '../controllers/user.controller.js'
// import { PruebaMiddleware } from '../services/token.service.js';
import {appMiddleware} from '../middleware/app.middleware.js'

const router= express.Router();
router.use(express.json())

router.post('/login' ,LoginController)
router.post('/register' ,RegisterController)



export default router