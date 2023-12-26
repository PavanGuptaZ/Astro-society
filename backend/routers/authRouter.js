import express from "express";
import { register, login, refresh, logout } from '../controller/authController.js'

import { getAllAstrologers, editAstrologers } from '../controller/astrologersController.js'
import verifyJWT from "../middleware/verifyJWT.js";

const router = express.Router()

router.get('/', verifyJWT, getAllAstrologers)

router.post('/login', login)

router.post('/register', register, login)

router.get('/refresh', refresh)

router.post('/logout', logout)

router.patch('/:id', verifyJWT, editAstrologers)

export default router