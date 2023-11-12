import { express } from "express";
const router = express.Router();

router.get('/profile', (req, res) => {
    const authenticatedUser = req.user;

    res.json({ message: 'Profile route accessed', user: authenticatedUser });
});

export default router;