const mongoose = require('mongoose')

const PlayerSchema = mongoose.Schema({
    name: {type: String, required: [true, "write ya name"]},
    hand: [{}],
    points: Number,
    host: Boolean,
    judge: Boolean,},{timestamps:true})

mongoose.model('Player', PlayerSchema)
