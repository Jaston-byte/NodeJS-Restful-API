// Import the necessary modules
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema for a state with a unique state code and an array of fun facts
const stateSchema = new Schema({
  stateCode: {
    type: String,
    required: true,
    unique: true,
  },
  funfacts: {
    type: [String],
  },
});

// Export the State model using the stateSchema
module.exports = mongoose.model("State", stateSchema);
