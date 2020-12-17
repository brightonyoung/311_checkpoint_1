const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const usersRoutes = require('./routes/users')
const port = process.env.PORT || 4000

app.use(bodyParser.json());
app.use(usersRoutes);

app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})