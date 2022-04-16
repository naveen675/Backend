express = require('express')
const app = express()
const port = process.env.PORT || 3000;

console.log(__dirname)
app.get('/', (req,res) => {
    
    res.send("hello world")
})

app.listen(port, () => {
    console.log(`Server listening at port: ${port}`)
  });