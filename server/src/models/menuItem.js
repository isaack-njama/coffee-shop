import { Schema, model } from 'mongoose';

const schema = Schema;

const menuItemSchema = new schema({
    name: {
        type: String,
        required: true,
    },
    description: String,
    price: {
        type: Number,
        required: true,
    }
});

const MenuItem = model('MenuItem', menuItemSchema);

export default MenuItem;