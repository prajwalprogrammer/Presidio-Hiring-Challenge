import express from 'express';
import { google, signOut, signin, signup, sendmail } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post('/google', google);
router.get('/signout', signOut)
router.get('/mail', sendmail)

export default router;