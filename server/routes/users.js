import express from "express"
import validateInput from "./../shared/validations/signup"

let router = express.Router();


router.post('/', (req, res) => {
  const { errors, isValid} = validateInput(req.body);
  console.log("error", errors);
  if (!isValid) {
    res.status(400).json(errors);
  }
})

export default router;
