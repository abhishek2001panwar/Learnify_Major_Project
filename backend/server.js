import express from 'express'
import  {connectDb} from './db/db.js'
import {router as userRouter} from './routes/user.routes.js'
import {router as courseRouter} from './routes/course.routes.js'
import {router as contactRouter} from './routes/contact.routes.js'
import {router as blogRouter} from './routes/blog.routes.js'
import {router as projectRouter} from './routes/project.routes.js'
import {router as carouselRouter} from './routes/carousel.routes.js'
import {router as adminRouter} from './routes/carousel.routes.js'
import {router as buildRouter} from './routes/frontend.routes.js'
import {router as paymentRoute} from './routes/payment.routes.js'
import {router as fileRoute} from './routes/file.routes.js'
import cors from 'cors'
import dotenv from 'dotenv'
import session from 'express-session'
const app = express()
dotenv.config()
connectDb()

app.use(cors())
app.use(session({ secret: 'secret-key', resave: false, saveUninitialized: false }));
app.use(express.json())



//routes congigation
app.use(express.json())
app.use("/api/v1/user",userRouter)
app.use("/api/v1/courses",courseRouter)
app.use("/api/v1/contact", contactRouter)
app.use("/api/v1/blog", blogRouter)
app.use("/api/v1/project", projectRouter)
app.use("/api/v1/carousel", carouselRouter)
app.use("/api/v1/admin", adminRouter)
app.use("/api/v1/payment", paymentRoute)
app.use("/api/v1/file", fileRoute)


app.use("/", buildRouter)




// mongodb connection
app.listen(process.env.PORT || 4001, () => {
  console.log("Example app listening on port 4000!", process.env.PORT || 4000);
});













