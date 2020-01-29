const mongoose = require('mongoose')



const GameSchema = mongoose.Schema({

    subject_cards: [{
        text: {type: String, required: [true, "it can't be a blank card"]},
        special_card: {type: Boolean, required: [true, "indicate whether it is a double card or not"]}
    }],

    player_cards: [{
        text: {type: String, required: [true, "it can't be a blank card"]}
    }],

    players: [{
        name: {type: String, required: [true, "write ya name"]},
        hand: [{}],
        points: Number,
        host: Boolean,
        judge: Boolean,
    }],

    settings: {
        drawTwoSubjects: Boolean,
        meritocracy: Boolean,
        smoothOperator: Boolean,
        biggestLoser: Boolean,
        trading: Boolean,
        gamblingPoints: Boolean,
        
    }
},{timestamps:true})

mongoose.model('Game', GameSchema)
