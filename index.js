const express = require('express')
const userRouter = require('./routes/user.routes.js')
const postRouter = require('./routes/post.routes.js')

const app = express()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use('/api',userRouter)
app.use('/api',postRouter)

app.listen(PORT,()=>{console.log("server started")})