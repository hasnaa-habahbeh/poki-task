const express = require('express');
const app = express();
const superagent = require('superagent');
require('dotenv').config();
const PORT = process.env.PORT;

app.use(express.static('public'));
app.set('view engine', 'pug');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/pokemon', async (req, res) => {
    let data = await superagent.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=800');
    res.render('rendering', { title: 'Pokémon', data: data.body.results, category: 'pokemon' });
})

app.get('/berries', async (req, res) => {
    let data = await superagent.get('https://pokeapi.co/api/v2/berry');
    res.render('rendering', { title: 'Berries', data: data.body.results, category: 'berry' });
})

app.get('/games', async (req, res) => {
    let data = await superagent.get('https://pokeapi.co/api/v2/generation');
    res.render('rendering', { title: 'Games', data: data.body.results, category: 'generation' });
})

app.get('/items', async (req, res) => {
    let data = await superagent.get('https://pokeapi.co/api/v2/item');
    res.render('rendering', { title: 'Items', data: data.body.results, category: 'item' });
})

app.get('/locations', async (req, res) => {
    let data = await superagent.get('https://pokeapi.co/api/v2/location');
    res.render('rendering', { title: 'Locations', data: data.body.results, category: 'location' });
})

app.get('/open-page', async (req, res) => {
    let category = req.query.category;
    let id = req.query.id;
    let data = await superagent.get(`https://pokeapi.co/api/v2/${category}/${id}`);
    res.render('individual-render', { category: category, data: data.body });
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})
