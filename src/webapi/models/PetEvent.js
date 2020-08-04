const mongoose = require('mongoose');

const locationPointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

const petEventSchema = new mongoose.Schema({
  petName: String,
  petBreed: String,
  petPictureUrl: String,
  location: {
    type: locationPointSchema,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, { collection: 'pet-events', timestamps: true });

const PetEvent = mongoose.model('PetEvent', petEventSchema);

module.exports = PetEvent;
