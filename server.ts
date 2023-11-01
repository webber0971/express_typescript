import express, { Application } from "express";
import Server from "./src/index";
import sqlite3 from 'sqlite3';
// const db = new sqlite3.Database(':memory:');    // 創建一個暫存記憶體資料庫而不是實際的磁碟檔案
const db = new sqlite3.Database('./database.db');  // 建立存檔檔名與路徑

const app: Application = express();

const server: Server = new Server(app);

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;



app
    .listen(PORT, "localhost", function () {
        console.log(`Server is running on port ${PORT}.`);
    })
    .on("error", (err: any) => {
        if (err.code === "EADDRINUSE") {
            console.log("Error: address already in use");
        } else {
            console.log(err);
        }
    });