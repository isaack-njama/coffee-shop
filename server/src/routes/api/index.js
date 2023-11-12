import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.send('Hello, this is the base route!');
});

export default router;