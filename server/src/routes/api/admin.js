import { Router } from 'express';
const router = Router();

import { isAdmin } from '../../middleware/auth.js';

router.post('/admin', async (req, res) => {
    try {
        const newAdmin = await create(req.body);
        res.status(201).json(newAdmin);
    } catch (error) {
        console.error('Error creating admin user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/admin', async (req, res) => {
    try {
        const admin = await find();
        res.json(admin);
    } catch (error) {
        console.error('Error getting admin users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.put('/admin/:id', async (req, res) => {
    try {
        const updatedAdmin = await findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(updatedAdmin);
    } catch (error) {
        console.error('Error updating admin user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.delete('/admin/:id', async (req, res) => {
    try {
        await findByIdAndDelete(req.params.id);
        res.json({ message: 'Admin user deleted successfully' });
    } catch (error) {
        console.error('Error deleting admin user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;