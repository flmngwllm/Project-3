const Game = require('../models/Game')
const List = require('../models/List')
const User = require('../models/User')
var request = require('request');


const gameController = {


  api: (req, res, next) => {
    request({
      uri: 'http://www.giantbomb.com/api/search',
      qs: {
        query:'',
        api_key: '2676a00c074cbcbcca151b97319da60f7c260660',
        resources: ['game'],
        offset: 10,
        limit: 20,
        fields: ['name', 'description', 'image']
      }
    }).pipe(res);
  },
  
  

    index: (req, res) => {
      let userId = req.params.userId
      let listId = req.params.listId
      User.findById(userId).populate('lists')
        .then((user) => {
          const lists = user.lists.id(listId)
          res.send(lists.games)
        })
    },

    show: (req, res) => {
      let gameId = req.params.gameId
      Game.findById(gameId)
        .then((game) => {
          res.send(game)
        })
    },
    delete: (req, res) => {
      let gameId = req.params.gameId
      Game.findByIdAndDelete(gameId)
        .then(() => {
          res.send(200)
        })
    }
  
  }
  
  

module.exports = gameController