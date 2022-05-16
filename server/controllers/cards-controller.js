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

exports.cardsCategory = async (req, res) => {
    knex('cards')
     .where({categoryId: req.params.id}) // select one category
    
     // if successful:
     .then(userData => {
         // send cards from database
         res.json(userData)
     })
     // if unsuccessful:
     .catch(err => {
         //send error message

         res.json({ message: 'There was an error retrieving the category: ' + req.params.id})
     })
     
}

exports.multipleCategories = async (req, res) => {
    var arr = req.body.json_data
    // parse the array with category names
    var parsedArr = JSON.parse(arr)
    console.log(parsedArr)
    knex('cards')
    //if category is in the array with current categories
    .whereIn('categoryId',parsedArr)
     // if successful:
    .then(userData => {
        // send cards from database
        res.json(userData)
    })
    // if unsuccessful:
    .catch(err => {
        //send error message

        res.json({ message: 'There was an error retrieving the category: ' + req.params.id})
    })
}

exports.searchCard = async (req,res) => {
    knex('cards')
    .where({name: req.params.name}) // select one category
   
    // if successful:
    .then(userData => {
        // send cards from database
        res.json(userData)
    })
    // if unsuccessful:
    .catch(err => {
        //send error message

        res.json({ message: 'There was an error retrieving the category: ' + req.params.id})
    })
}



