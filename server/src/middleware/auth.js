import jwt from "jsonwebtoken";
import 'dotenv/config';

const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'Admin') {
        return next();
    } else {
        return res.status(403).json({ message: 'Forbidden' });
    }
};

const authenticateToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized: No token provided' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Forbidden: Invalid token' });
        }

        req.user = user;

        next();
    })
}

export { authenticateToken, isAdmin };