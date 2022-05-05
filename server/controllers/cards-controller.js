//import database
const knex = require('./../db')



//retrieve all cards
//probably should rename....
// async is used to add a promise, do different things if we get error
exports.cardsAll = async (req,res) => {
    knex
     .select('*') //select all
     .from('cards') //from cards table
     // if successful:
     .then(userData => {
         // send cards from database
         res.json(userData)
     })
     // if unsuccessful:
     .catch(err => {
         //send error message

         res.json({ message: 'There was an error retrieving all the cards: ${err}'})
     })
}

//add new pic-sound-card to database
exports.cardsCreate = async (req,res) => {
    knex('cards')
     .insert({
         'pic': req.body.pic,
         'sound': req.body.sound,
         'categoryId': req.body.categoryId,
         'name': req.body.name

     })
     .then(() => {
         //send success message
         res.json({message: `Card \'${req.body.name}\' created.` })
        
    })
    .catch(err => {
        //send error message
        res.json({message: `There was an error creating \'${req.body.name}\' card.` })
    })
}

exports.cardsCategory = async (req,res) => {
    knex
     .select('*') //select all
     .from('cards') //from cards table
     .where({categoryId: req.body.categoryId}) // select one category
    
     // if successful:
     .then(userData => {
         // send cards from database
         res.json(userData)
     })
     // if unsuccessful:
     .catch(err => {
         //send error message

         res.json({ message: 'There was an error retrieving the category: ${err}'})
     })
     
}



