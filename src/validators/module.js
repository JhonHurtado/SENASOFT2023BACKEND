import { check } from "express-validator";
import { validateResult } from "../helper/validateHelper.js";

export const validateModule = [
  check("nameModule", "nameCategory is required").not().isEmpty().isString(),
  check("description", "description is required").not().isEmpty().isString(),
  check("categoryId", "categoryId is required").not().isEmpty().isString(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
