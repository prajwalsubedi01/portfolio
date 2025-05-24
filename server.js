const express=require('express');
const connectDb= require('./config/db');
const cors =require('cors');
const contactRoutes=require('./routes/contact');
const projectRoutes = require('./routes/project');
const app =express();
require('dotenv').config
connectDb();
app.use(cors());
app.use(express.json());
app.get('/ping', (req, res) => {
  res.status(200).send('✅ Server is awake and running!');
});
app.use('/api/contact',contactRoutes);
app.use('/api/projects', projectRoutes);

app.listen(process.env.PORT,()=>{
console.log(`server running on port${process.env.PORT}`)
});
