const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const List = new Schema({
    title: String,
    description: String,
    games: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Game'
        }
    ]
   
})

module.exports = mongoose.model('List', List)