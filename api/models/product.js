const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    desc: String,
    img: String
});

module.exports = mongoose.model('Product', productSchema);