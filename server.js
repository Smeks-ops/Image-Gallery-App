const Express = require('Express');
const dotenv = require('dotenv');
const cors = require('cors');
const { json } = require('body-parser');
const axios = require('axios');

const app = Express()

app.use(cors())
app.use(json())

app.get('/photos', async (req, res) => {
  return res.send({message: 'hello'})
})

const PORT = 7000

app.listen(PORT, console.log(`Server running on port ${PORT}`))
