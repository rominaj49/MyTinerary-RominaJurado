import mongoose from 'mongoose'

const itinerarySchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
    activities: [{ type: String }],
    hashtags: [{type: String, required: true}],
    description: { type: String, required: true },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    city: { type: mongoose.Schema.Types.ObjectId, ref: 'City', required: true },
    guide: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },

})

export const Itinerary = mongoose.model('itinerary', itinerarySchema)