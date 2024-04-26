import mongoose from 'mongoose'

const itinerarySchema = new mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    guide: { type: String, required: true },
    duration: { type: Number, required: true },
    hashtags: [{type: String, required: true}],
    guide_image: { type: String, required: true },
    description: { type: String, required: true },
    activities: [{ type: String }],
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    city: { type: mongoose.Schema.Types.ObjectId, ref: 'City', required: true },
})

export const Itinerary = mongoose.model('itinerary', itinerarySchema)