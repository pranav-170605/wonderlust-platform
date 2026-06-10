const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// IMPORTANT FIX
const plm = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
});


userSchema.plugin(plm.default ?? plm);

module.exports = mongoose.model("User", userSchema);
