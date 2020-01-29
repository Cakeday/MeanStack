const mongoose = require('mongoose')

const SubjectCardSchema = mongoose.Schema({
    text: {type: String, required: [true, "it can't be a blank card"]}
},{timestamps:true})

mongoose.model('SubjectCard', SubjectCardSchema)
