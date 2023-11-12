import { Schema, model } from 'mongoose';

const schema = Schema;

const orderSchema = new schema({
    customerName: { 
        type: String, 
        required: true 
    },
    items: [
        {
            itemId: {
                type: Schema.Types.ObjectId,
                required: true,
            },
        },
    ],
    totalAmount: { 
        type: Number, 
        default: 0, 
    },
    status: {
        type: String,
        default: 'Pending',
    },
});

const Order = model('Order', orderSchema);

export default Order;