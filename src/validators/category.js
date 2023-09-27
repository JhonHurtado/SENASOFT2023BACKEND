import { check } from "express-validator";
import { validateResult } from "../helper/validateHelper.js";

export const validateCategory = [
  check("nameCategory", "nameCategory is required").not().isEmpty().isString(),
  check("description", "description is required").not().isEmpty().isString(),
  check("userId", "userId is required").not().isEmpty().isString(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
