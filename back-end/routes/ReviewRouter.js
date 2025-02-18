const express = require('express');
const { AddReview, GetReviews, DeleteReview } = require('../controllers/ReviewControll');

const AllReview = express.Router();

// Simulated database
AllReview.post('/reviews', AddReview );
AllReview.get('/reviews', GetReviews );
AllReview.delete('/review/:id', DeleteReview );



module.exports = AllReview;