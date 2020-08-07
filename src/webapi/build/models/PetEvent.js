"use strict";
var mongoose = require('mongoose');
var locationPointSchema = new mongoose.Schema({
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
var petEventSchema = new mongoose.Schema({
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
var PetEvent = mongoose.model('PetEvent', petEventSchema);
module.exports = PetEvent;
