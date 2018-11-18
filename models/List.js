const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const List = new Schema({
    title: String,
    description: String,
   
})

module.exports = mongoose.model('List', List)