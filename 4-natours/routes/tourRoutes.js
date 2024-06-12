const express = require('express');
const toursController = require('./../controllers/tourController');

const tourRouter = express.Router();

// tourRouter.param('id', toursController.checkID)

tourRouter.route('/top-5-cheap').get(toursController.aliasTopTours, toursController.getAllTours)
tourRouter.route('/tour-stats').get(toursController.getTourStats)
tourRouter.route('/monthly-plan/:year').get(toursController.getMonthlyPlan)
tourRouter
  .route('/')
  .get(toursController.getAllTours)
  .post(toursController.createTour);
tourRouter
  .route('/:id')
  .get(toursController.getTour)
  .patch(toursController.updateTour)
  .delete(toursController.deleteTour);

module.exports = tourRouter;
