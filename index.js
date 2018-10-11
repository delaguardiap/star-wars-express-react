const express = require('express');
const axios = require('axios');
const API_KEY = 'e0be4007';

const app = express();

const PORT = process.env.PORT || 5000;

// API endpoints
app.get('/movies/:id', async (req, res) => {
	try {
		let {data} = await axios.get(`http://swapi.co/api/films/${req.params.id}`);
		res.json(data);
	} catch(e) {
		res.json({'Error': 'Error'});
	}
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));