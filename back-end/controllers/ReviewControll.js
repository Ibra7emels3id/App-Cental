const Review = require("../models/Review");
// Add Review
const AddReview = async (req, res, next) => {
    try {
        const review = new Review(req.body);
        await review.save();
        res.status(201).json({ message: "Review saved successfully", review });
    } catch (error) {
        res.status(400).json({ message: error.message });
        next();
    }
}

// Delete a Review
const DeleteReview = async (req, res, next) => {
    await Review.findByIdAndDelete(req.params.id);
    res.json({ message: "Review deleted successfully" });
}

// Get All Review
const GetReviews = async (req, res, next) => {
    const reviews = await Review.find({});
    res.json(reviews);
}

module.exports = {
    AddReview,
    GetReviews,
    DeleteReview,
};