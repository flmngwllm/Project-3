const mongoose = require('./connections')
const User = require('../models/User')
const List = require('../models/List')



//require controllers here
const Stuff = new Idea({
    title: 'The Worst',
    description: "Games to never play"
})
const Want = new Idea({
    title: 'Buying Immediatly',
    description: "Games to buy when I have money"
})

const noname = new User({
    username: 'noname21',
    password: 'nothing'
})
const yesname = new User({
    username: 'yesname889',
    password: 'yesthing'
})

User.remove({})
    .then(() => List.remove({}))
    .then(() => List.insertMany([Stuff,Want]))
    .then(() => noname.save())
    .then(() => yesname.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())