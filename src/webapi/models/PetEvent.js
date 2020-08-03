const mongoose = require('mongoose');

const petEventSchema = new mongoose.Schema({
  petName: String,
  petBreed: String,
  petPictureUrl: String,
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, { collation: 'pet-events', timestamps: true });

const PetEvent = mongoose.model('PetEvent', petEventSchema);

module.exports = PetEvent;
