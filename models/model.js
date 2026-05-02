const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Please provide a product title'],
            trim: true,
            maxlength: [100, 'Title cannot be more than 100 characters']
        },
        price: {
            type: Number,
            required: [true, 'Please provide a price'],
            validate: {
                validator: (value) => value >= 0,
                message: 'Price cannot be negative'
            }
        },
        stock: {
            type: Number,
            required: [true, 'Please provide stock quantity'],
            validate: {
                validator: (value) => value >= 0,
                message: 'Stock cannot be negative'
            }
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Product', productSchema);
