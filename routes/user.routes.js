import express from 'express'
import {LoginController, validateTokenController, RegisterController} from '../controllers/user.controller.js'

const router= express.Router();
router.use(express.json())

router.post('/login', LoginController)
router.post('/register', RegisterController)

router.post('/validatetoken', validateTokenController)

export default router