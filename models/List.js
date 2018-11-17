const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const List = new Schema({
    title: String,
    description: String,
    list: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Games'
    }
]
})

module.exports = mongoose.model('List', List)