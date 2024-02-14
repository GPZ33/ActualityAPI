import mongoose from "mongoose";
import { ActualitySchema } from "../schemas/actuality.schema";

export const ActualityModel = mongoose.model('actualities', ActualitySchema)

