const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();
const product_controller = require('./products_controller');

const app = express();
app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => app.set('db', db)).catch(err => console.log(err));

app.get('/api/products', product_controller.getAll)
app.get('/api/product/:id', product_controller.getOne)
app.put('/api/product/:id', product_controller.update)
app.post('/api/product', product_controller.create)
app.delete('/api/product/:id', product_controller.delete)



const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}.`))