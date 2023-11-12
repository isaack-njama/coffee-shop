import { Router } from 'express';
const router = Router();
import userController from '../../controllers/user.js';

router.post('/createUser', userController.createUser);

router.get('/getUsers', userController.getUsers);

export default router;