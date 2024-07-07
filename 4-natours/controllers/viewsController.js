const Tour = require('./../models/tourModel');
const catchAsync = require('./../utils/catchAsync');
exports.getOverview = catchAsync(async (req, res) => {
  // Get tour data from collection
  const tours = await Tour.find();

  // Build template
  // Render template using tour data
  res.status(200).render('overview', {
    title: 'All Tours',
    tours,
  });
});

exports.getTour = (req, res) => {
  res.status(200).render('tour', {
    title: 'Tour name',
  });
};
