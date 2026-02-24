import express from 'express'
import {LoginController} from '../controllers/user.controller.js'
// import { PruebaMiddleware } from '../services/token.service.js';
import {appMiddleware} from '../middleware/app.middleware.js'

const router= express.Router();
router.use(express.json())

router.post('/login' ,LoginController)



export default router