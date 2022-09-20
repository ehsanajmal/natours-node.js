const Review = require('./../models/reviewModel')
const catchAsync = require('./../utils/catchAsync')
const AppError = require('./../utils/appError')
const factory = require('./handlerFactory')

exports.setTourUserIds = (req, res, next ) => {
        //Allowed nested routes
        if(!req.body.tour) req.body.tour = req.params.tourId
        if(!req.body.user) req.body.user = req.user.id;
        next();
}


exports.createReview = factory.createOne(Review)

// catchAsync(async(req, res, next)=>{
//     // //Allowed nested routes
//     // if(!req.body.tour) req.body.tour = req.params.tourId
//     // if(!req.body.user) req.body.user = req.user.id;
    
//     const newReview = await Review.create(req.body);        
//         res.status(200).json({
//             status: 'success',
//             // requestedAT: req.requestTime,
//             results: newReview.length,
//             data: {
//                 newReview
//             }
//         })
// });

exports.getAllReviews = factory.getAll(Review)


// catchAsync(async(req, res, next)=>{
//     let filter = {};
//       if(req.params.tourId) filter = {tour: req.params.tourId}
//       const reviews = await Review.find(filter);        
//           res.status(200).json({
//               status: 'success',
//               // requestedAT: req.requestTime,
//               results: reviews.length,
//               data: {
//                   reviews
//               }
//           })
//   });

exports.getReview=factory.getOne(Review)
exports.updateReview = factory.updateOne(Review)
exports.deleteReview = factory.deleteOne(Review)