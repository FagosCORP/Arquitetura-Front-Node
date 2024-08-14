import express from "express";

export const user = express.Router();

let users = { items: [] }

user.post('/', (req, res) => {
  users.items.push(req.body)
  res.send('usuario salvo:', req.body);
})

