import express from "express";
import {
  getIntensity,
  getLikelihood,
  getRelevance,
  getYear,
  getCountry,
  getTopic,
} from "../controllers/client.js";

const router = express.Router();

router.get("/intensity", getIntensity);
router.get("/likelihood", getLikelihood);
router.get("/relevance", getRelevance);
router.get("/year", getYear);
router.get("/country", getCountry);
router.get("/topics", getTopic);

export default router;
