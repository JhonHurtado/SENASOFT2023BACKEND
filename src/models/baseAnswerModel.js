import { Schema, model } from "mongoose";
import Test from './testModel.js';

const baseAnswerSchema = new Schema(
  {
    numeroPregunta: {
      type: Schema.Types.ObjectId,
      required: true,
      ref:Test
    },
    visual: {
      type: String,
      required: true,
    },
    auditivo: {
      type: String,
      required: true,
    },
    lecturaEscritura: {
      type: String,
      required: true,
    },
    kinestesico: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);


export default model("BaseAnswer", baseAnswerSchema);
