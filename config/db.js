const mongoose =require('mongoose');
require ('dotenv').config();


const connectDb = async () => {
    try {
        await mongoose.connect(process.env.URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,

        });
        console.log("mongodb connected")
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}
module.exports =connectDb;



