const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const Tour = require('./../models/tourModel');

exports.getOverview = catchAsync(async (req, res, next) => {
    const tours = await Tour.find();

    res.status(200).render('overview', {
        title: 'OverView',
        tours
    });
});
exports.getTour = catchAsync(async (req, res) => {
    const tour = await Tour.findOne({ _id: req.params.id })
        .populate({
            path: 'reviews',
            fields: 'review raiting user'
        });
    // console.log(tour);
    res.status(200).render('tour', {
        title: 'tour',
        tour
    });
});
exports.getloginForm = catchAsync(async (req, res) => {
    res.status(200).render('Login', {
        title: 'Login to your account'
    });
});