const mongoose = require('mongoose');


const propertySchema = new mongoose.Schema({
    house:{ type: String, required: true, unique: true }
});


const Property = mongoose.model('propertya', propertySchema);

module.exports = Property;