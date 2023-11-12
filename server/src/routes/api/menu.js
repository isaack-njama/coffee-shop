import { Router } from 'express';
const router = Router();

import MenuItem from '../../models/menuItem.js';

router.post('/items', async (req, res) => {
    try {
        const newItem = await MenuItem.create(req.body);
        res.status(201).json(newItem);
    } catch (error) {
        console.error('Error creating menu item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/items', async (req, res) => {
    try {
        const items = await MenuItem.find();
        res.json(items);
    } catch (error) {
        console.error('Error getting menu items:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.put('/items/:id', async (req, res) => {
    try {
        const updatedItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(updatedItem);
    } catch (error) {
        console.error('Error updating menu item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.delete('/items/:id', async (req, res) => {
    try {
        await MenuItem.findByIdAndDelete(req.params.id);
        res.json({ message: 'Menu item deleted successfully' });
    } catch (error) {
        console.error('Error deleting menu item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;