import express from "express";
import cors from "cors";
import proxy from "express-http-proxy";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/Customer', proxy('http://localhost:8001'));
app.use('/Shopping', proxy('http://localhost:8003'));
app.use('/',proxy('http://localhost:8002'));

app.listen(8000,()=>{
    console.log("Server listening on 8000");
});