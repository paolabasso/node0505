import express from "express";
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Task from './models/taskModel.js';
import bodyParser from "body-parser";
import cors from 'cors';

dotenv.config();

const app = express();

app.use(
    cors({
        origin:"*",
    })
);

const password = process.env.PASSWORD;
const user = process.env.USER;
const nomedb = process.env.DB;


//mongoose, traduz o que é mandando para o mongo
//const db = mongoose.connect("mongodb://localhost/avanade");
const db = mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.ajxyc.mongodb.net/${nomedb}?retryWrites=true&w=majority`);


const tasksRouter = express.Router();
// se não instalar o pacote dotenv não é possível ler os arquivos do .env
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

tasksRouter.route("/tasks")
.post((req, res) => {
    const task = new Task(req.body);

    task.save();
    return res.status(201).json(task);
    //201 = deu certo e foi criado;
})
.get((req, res) => {
//queryString - http://localhost:5000/api
 //const { query } = req;
    const query = {}
    
    if(req.query.title){
        query.title = req.query.title;
    }
 //   const response = { title: "NodeJS + Express + REST API"};
    Task.find(query, (err, tasks) => {
        if(err){
            return res.send(err);
        }else{
            return res.json(tasks);
        }
    });
});

tasksRouter.route("/tasks/:taskId").get((req, res) => {
        
        Task.findById(req.params.taskId, (err, tasks) => {
            if(err){
                return res.send(err);
            }else{
                return res.json(tasks);
            }
        });
    });



app.use("/api", tasksRouter);
// localhost:5000/api/tasks
//HATEOAS - Hypermedia as the Engine of Application State

app.get('/', (req, res)=>{
    console.log(req);
    res.send('<h1>Bem-vindo à REST API</h1>');
});

app.listen(port, ()=>{
    console.log(`Running Web Server at port: ${port}`);
});

app.post('')