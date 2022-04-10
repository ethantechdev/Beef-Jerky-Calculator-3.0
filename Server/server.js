const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

const objectArray = []


app.use(express.json())
app.use(cors());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Public/Index.html'))
})

app.get('/styles', (req, res) => {
    res.sendFile(path.join(__dirname, '../Public/Index.css'))
})

app.get('/javascript', (req, res) => {
    res.sendFile(path.join(__dirname, '../Public/Index.js'))
})

app.get('/jerkyimage', (req, res) => {
    res.sendFile(path.join(__dirname, '../Public/Jerky.webp'))
})

app.post('/api/data', (req, res) => {
    objectArray.push(req.body)
    console.log(objectArray)
    res.status(200).send("successfully logged")
    .catch (err) 
        console.log(err)
    
})


app.post('/api/students', (req, res) => {

})

app.delete('/api/students/:index', (req, res) => {
    const targetIndex = +req.params.index
    
    students.splice(targetIndex, 1)
    res.status(200).send(students)
})


const port = process.env.PORT || 4050

app.listen(port, () => console.log(`Server listening on ${port}`))
