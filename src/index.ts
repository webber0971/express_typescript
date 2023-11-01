import express, { Application } from "express";
import cors, { CorsOptions } from "cors";
import Routes from "./routes";
import sqlite3 from 'sqlite3';

// export default class Server {
//   constructor(app: Application) {
//     this.config(app);
//   }


export default class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }
  // config 方法設定了幾個常見的中介軟體，包括 CORS、JSON 解析和 URL 編碼。
  private config(app: Application): void {
    const corsOptions: CorsOptions = {
      origin: "http://localhost:8081"
    };

    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
  }
}