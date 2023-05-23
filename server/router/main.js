import express from "express";
// import * as authController from "../controller/auth.js";
import * as mainController from '../controller/main.js'
import { noLoginme } from '../controller/main.js'
import { isAuth } from "../middleware/auth.js";
import * as mainAuth from '../controller/auth.js'
import { map_modal } from "../controller/map_modal.js";

const app = express();
const router = express.Router();

// 메인페이지


app.use(express.json())


export default router;