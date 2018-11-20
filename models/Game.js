const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Game = new Schema({
    name: String,
    image: String,
    description: String
   
})

module.exports = mongoose.model('Game', Game)