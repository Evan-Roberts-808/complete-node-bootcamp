const express = require('express');
const toursController = require('./../controllers/tourController');
const authController = require('./../controllers/authController');
const tourRouter = express.Router();

// tourRouter.param('id', toursController.checkID)

tourRouter.route('/top-5-cheap').get(toursController.aliasTopTours, toursController.getAllTours)
tourRouter.route('/tour-stats').get(toursController.getTourStats)
tourRouter.route('/monthly-plan/:year').get(toursController.getMonthlyPlan)
tourRouter
  .route('/')
  .get(authController.protect, toursController.getAllTours)
  .post(toursController.createTour);
tourRouter
  .route('/:id')
  .get(toursController.getTour)
  .patch(toursController.updateTour)
  .delete(authController.protect, authController.restrictTo('admin', 'lead-guide'), toursController.deleteTour);

module.exports = tourRouter;
