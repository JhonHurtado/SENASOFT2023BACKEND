import { check } from "express-validator";
import { validateResult } from "../helper/validateHelper.js";

export const validateAnswers = [
  check("answer", "answer is required").not().isEmpty().isString(),
  check("identifier", "identifier is required").not().isEmpty().isString(),
  check("questionId", "questionId is required").not().isEmpty().isString(),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];
