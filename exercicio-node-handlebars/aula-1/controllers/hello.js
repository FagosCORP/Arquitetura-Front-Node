import express from "express";

export const hello = express.Router();

hello.get('/:firstName/:lastName', function(req, res, _) {
  res.render('hello', {
    firstName: req.params.firstName,
    lastName: req.params.lastName
  });
});
