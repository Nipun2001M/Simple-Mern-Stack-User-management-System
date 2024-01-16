const express =require('express');
const app=express();
const cors=require('cors');

const port=3001;
const host='127.0.0.1';
const mongoose=require('mongoose');
const URI="mongodb+srv://nipundb:singerlaptop@cluster0.btrta64.mongodb.net/?retryWrites=true&w=majority"
const router=require('./router')

app.use(cors());
app.use(express.json());
app.use('/api',router);



const connect=async()=>{
    try{
        await mongoose.connect(URI)
        console.log('Sucessfully Connected to MongoDB!!')

    }catch(error){
        console.log('mongodb error',error)

    }
}

connect();

const server=app.listen(port,host,()=>{
    console.log(`Node Server is listning to ${server.address().port}`)
});
