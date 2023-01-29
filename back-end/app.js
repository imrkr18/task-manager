const express = require('express')
const tasks = require('./routes/tasks')
const PORT = process.env.PORT || 3001

const app = express()

//middleware

app.use(express.json())


//routes
app.get('/api', (req, res)=>{
    res.json({msg:'Task Manager App'})
})

app.use('/api/v1/task',tasks)


app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`)
})