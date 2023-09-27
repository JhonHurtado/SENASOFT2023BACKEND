import { check } from "express-validator";
import { validateResult } from "../helper/validateHelper.js";

export const validateTypeLearn = [
  check("nameTypeLearn", "nameCategory is required").not().isEmpty().isString(),
  check("description", "description is required").not().isEmpty().isString(),
  check("testId", "userId is required").not().isEmpty().isString(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
