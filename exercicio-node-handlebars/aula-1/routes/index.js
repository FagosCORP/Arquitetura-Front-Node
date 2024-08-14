import express from "express"
import { hello } from "../controllers/hello.js"
import { form } from "../controllers/form.js"
import { user } from "../controllers/users.js"

export const routes = express.Router()

routes.use("/hello", hello)
routes.use("/form", form)
routes.use("/users", user)
