const mongoose = require('mongoose');
const { Schema } = mongoose;

const ListingSchema = new Schema({
    title: String,
    quantity: Number,
    description: String,
    category: String,
    images: { type: [String] },
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    datePosted: Date,
    status: { type: String, default: 'published' }
});
ListingSchema.index({ title: 'text', description: 'text' });
module.exports = mongoose.model('Listing', ListingSchema);
