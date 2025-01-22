import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()




// import express from "exress"
//     const app = express()

// (async ()=>{
//     try {
//         mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        
//     } catch (error) {
//         console.error("ERROR",error)
//         throw err
        
//     }
// })()