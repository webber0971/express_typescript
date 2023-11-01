import { Request, Response } from "express";
import sqlite3 from 'sqlite3';

interface Row {
    id: number;
    name: string;
}

export default class OtpController {

    private db: sqlite3.Database;

    
    constructor() {
        this.db = new sqlite3.Database('./database.db');
        this.initializeDatabase()
    }

    private initializeDatabase() {
        const db = this.db;
        db.serialize(() => {
            db.run('CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)');

            // 插入資料
            // const stmt = db.prepare('INSERT INTO users (name) VALUES (?)');
            // stmt.run('John Doe');
            // stmt.run('Jane Smith');
            // stmt.finalize();

            // 查詢並輸出結果
            db.each('SELECT id, name FROM users', (err, row:Row) => {
                if (err) {
                    console.error(err.message);
                }
                console.log(row.id + '\t' + row.name);
            });
        });
    }



    async hello(req: Request, res: Response) {
        const data = "你好"
        try {
            res.status(201).json({
                message: data,
                isSuccess: true
            })
        } catch {
            res.status(500).json({
                message: "error"
            })
        }
    }
}