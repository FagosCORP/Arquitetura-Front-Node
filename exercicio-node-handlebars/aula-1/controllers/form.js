import express from "express";

export const form = express.Router();

form.get('/', function(req, res, _) {
  res.render('form');
});
