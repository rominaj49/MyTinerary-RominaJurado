import mongoose from 'mongoose'

const citySchema = new mongoose.Schema({

    name: { type: String, required: true },
    country: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    currency: { type: String, required: true },
    language: { type: String, required: true },
    averageRating: { type: Number, default: 0 },
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    itineraries: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Itinerary' }]

})

export const City = mongoose.model('city', citySchema)