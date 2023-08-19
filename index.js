// https://deshi-chef-server-durdantozahid-gmailcom.vercel.app/
const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

const chefs = require('./data/chefs.json')
const recipe = require('./data/recipe.json')

app.use(cors())

app.get('/', (req, res) => {
  res.send('Deshi Chef Server is running')
})


app.get('/chef', (req, res) => {
    res.send(chefs);
})
app.get('/recipe', (req, res) => {
    res.send(recipe);
})
app.get("/chef/:id", (req, res) => {
    const id = req.params.id;
    const selectChef = chefs.find((select) => select.chefID === id);
    res.json(selectChef);
  });
app.get("/recipe/:id", (req, res) => {
    const id = req.params.id;
    const selectRecipe = recipe.find((select) => select.chefID === id);
    res.json(selectRecipe);
  });





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})