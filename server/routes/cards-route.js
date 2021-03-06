//import express
const express = require('express')

const cardsRoutes = require('./../controllers/cards-controller.js')

//create router
const router = express.Router()


// Add route for GET request to retrieve all cards
router.get('/all', cardsRoutes.cardsAll)

// Add route for POST request to create new book
router.post('/create', cardsRoutes.cardsCreate)

// add route for GET request to retrieve one categroy from cards
router.get('/category/:id', cardsRoutes.cardsCategory)

// add route for POST requst to retrieve cards from specific categories
router.post('/guess', cardsRoutes.multipleCategories)

//add route for GET request to retrieve card/cards that matches a string
router.get('/search/:name', cardsRoutes.searchCard)



/*
router
  .route("/:id")
  .get(function(req, res) {
    const db = req.app.get("db");
    UsersService.getById(db, req.params.id).then(data => {
      res.send(data);
    });
  })
  .patch(function(req, res) {
    const db = req.app.get("db");
    UsersService.updateUser(db, req.params.id, req.body).then(() => {
      res.status(204).end();
    });
  })
  .delete(function(req, res) {
    const db = req.app.get("db");
    UsersService.deleteUser(db, req.params.id).then(data => {
      res.status(204).end();
    });
  });
*/
// Export router
module.exports = router