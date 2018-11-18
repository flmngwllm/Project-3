const mongoose = require('./connections')
const User = require('../models/User')
const List = require('../models/List')



//require controllers here
const Stuff = new List({
    title: 'The Worst',
    description: "Games to never play"
})
const Want = new List({
    title: 'Buying Immediatly',
    description: "Games to buy when I have money"
})

const noname = new User({
    username: 'noname21',
    password: 'nothing',
    lists: [Stuff, Want]
})


User.remove({})
    .then(() => List.remove({}))
    .then(() => List.insertMany([Stuff,Want]))
    .then(() => noname.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())