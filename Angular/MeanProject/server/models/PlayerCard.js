const mongoose = require('mongoose')



const PlayerCardSchema = mongoose.Schema({
    text: {type: String, required: [true, "it can't be a blank card"]}
},{timestamps:true})

mongoose.model('PlayerCard', PlayerCardSchema)
