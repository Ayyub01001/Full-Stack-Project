const express = require('express');
const app = express();
const port = 4000;
const cors = require('cors');
const userRouter = require('./routes/user');
const taskRouter = require('./routes/tasks')


app.use(cors());

app.use(express.json());

app.use('/users',userRouter);
app.use('/tasks',taskRouter);

app.get('/',(req,res)=>{
    res.send("<h1>Home Page</h2>");
});

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});