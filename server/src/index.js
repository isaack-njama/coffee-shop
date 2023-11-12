import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectDB } from './config/db.js';

const app = express();

const allowedOrigins  = ['http://localhost:4000'];
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route files
import baseRoute from './routes/api/index.js';
import userRoutes from './routes/api/user.js';
import authRoutes from './routes/api/auth.js';
import itemRoutes from './routes/api/item.js';
import orderRoutes from './routes/api/order.js';
import adminRoutes from './routes/api/admin.js';
import menuRoutes from './routes/api/menu.js';

app.use('/', baseRoute);
app.use('/api', userRoutes);
app.use('/auth', authRoutes);
app.use('/items', itemRoutes);
app.use('/orders', orderRoutes);
app.use('/menu', menuRoutes);
app.use('/admin', adminRoutes);

connectDB();

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server listening at port: ${port}`);
});