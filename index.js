const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

let users = {
  'caro': '<div>ss</div>'
};

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  if ('OPTIONS' == req.method) {
    res.sendStatus(200);
  }
  else {
    next();
  }
});

app.post('/', (req, res) => {
  users = {
    ...users,
    ...req.body,
  }
  console.log('Got body:', users);
  res.json(users)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
