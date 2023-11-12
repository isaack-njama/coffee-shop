import { Router } from 'express';
const router = Router();

import Item from '../../models/item.js';

router.post('/items', async (req, res) => {
    try {
        const newItem = await Item.create(req.body);
        res.status(201).json(newItem);
    } catch (error) {
        console.error('Error creating item entry:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (error) {
        console.error('Error getting items:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.put('/items/:id', async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        res.json(updatedItem);
    } catch (error) {
        console.error('Error updating inventory item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.delete('/items/:id', async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        res.json({ message: 'Item deleted successfully' });
    } catch (error) {
        console.error('Error deleting inventory item:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

export default router;
