import express from 'express'
import {LoginController, validateTokenController} from '../controllers/user.controller.js'

const router= express.Router();
router.use(express.json())

router.post('/login', LoginController)

router.post('/validatetoken', validateTokenController)

export default router