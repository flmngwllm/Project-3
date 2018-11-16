const mongoose = require('./connections')
const User = require('../models/User')


//require controllers here


const noname = new User({
    username: 'noname21',
    password: 'nothing'
})

User.remove({})
    // .then(() => List.remove({}))
    // .then(() => List.insertMany())
    .then(() => noname.save())
    .then(() => console.log('Successful Save'))
    .then(() => mongoose.connection.close())