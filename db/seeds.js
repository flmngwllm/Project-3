const mongoose = require('./connections')
const User = require('../models/User')
const List = require('../models/List')
const Game = require('../models/Game')




// require controllers here

const RedDead = new Game({
    name: 'Red Dead',
    summary: 'cowboy saves town'
    
})
const Stuff = new List({
    title: 'The Worst',
    description: "Games to never play",
    games: [RedDead]
})
const Want = new List({
    title: 'Buying Immediatly',
    description: "Games to buy when I have money"
})



const noname = new User({
    username: 'Dave',
    password: 'Smith',
    location: 'Atlanta, Ga',
    lists: [Stuff, Want]
})


User.remove({})
    .then(() => List.remove({}))
    .then(() => List.insertMany([Stuff,Want]))
    .then(() => Game.remove({}))
    .then(() => Game.insertMany([RedDead]))
    .then(() => noname.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())