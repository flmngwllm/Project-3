
const User = require('../models/User')
const List = require('../models/List')


    
    
    const listController = {

      index: (req, res) => {
        let userId = req.params.userId
        User.findById(userId).populate('lists')
          .then((user) => {
            res.send(user.lists)
          })
      },
      show: (req, res) => {
        let listId = req.params.listId
        List.findById(listId)
          .then((list) => {
            res.send(list)
          })
      },
      delete: (req, res) => {
        let listId = req.params.listId
        List.findByIdAndDelete(listId)
          .then(() => {
            res.send(200)
          })
      },
      update: (req, res) => {
        let listId = req.params.listId
        List.findByIdAndUpdate(listId, req.body, { new: true })
          .then((updatedList) => {
            updatedList.save()
            res.send(updatedList)
          })
      },
      create: (req, res) => {
        let listId = req.params.userId
        User.findById(listId)
          .then((user) => {
            console.log(user)
            List.create(req.body)
              .then((newList) => {
                console.log(newList)
                user.lists.push(newList)
                user.save()
                res.send(newList)
              })
          })
      }
    
    }
    
    module.exports = listController