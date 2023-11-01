import { Router } from "express";
import OtpController from "../controllers/otp.controller";
import sqlite3 from 'sqlite3';

class OtpRoutes{
    router = Router()
    controller = new OtpController

    constructor(){
        this.intializeRoutes()
    }

    intializeRoutes(){
        this.router.get("/",this.controller.hello)
    }
}

export default new OtpRoutes().router
