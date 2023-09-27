import { check } from "express-validator";
import { validateResult } from "../helper/validateHelper.js";

export const validateResource = [
  check("nameResource", "nameResource is required").not().isEmpty().isString(),
  check("description", "description is required").not().isEmpty().isString(),
  check("urlResource", "urlResource is required").not().isEmpty().isString(),
  check("typeResource", "typeResource is required").not().isEmpty().isString(),
  check("moduleId", "moduleId is required").not().isEmpty().isString(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
