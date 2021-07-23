var {Schema, model} = require("mongoose");

var productSchema = new Schema ({
    name: String,
    description: String,
    price: {
        type: Number,
        default: 0
    }
})

module.exports = model('Product', productSchema);