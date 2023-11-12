import { Schema, model } from 'mongoose';

const schema = Schema;

const itemSchema = new schema({
    name: { 
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    quantity: {
        type: Number,
        default: 0,
    },
    price: {
        type: Number,
        default: 0,
    }
});

const Item = model('Item', itemSchema);

export default Item;