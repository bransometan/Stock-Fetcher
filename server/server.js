//import Express.js library
const express = require('express');
//import axios module (library for make HTTP request)
const axios = require('axios');
//creates an Express application instance
const app = express();

//Creates a GET route for the path '/api/stock' that takes a request and response object as its arguments.
//Inside this route, an array of stock tickers is defined, as well as an API key used to access data from the IEX Cloud API.
app.get('/api/stock', async (req, res) => {
    const tickers = ["AAPL", "NFLX", "GOOG", "AMZN", "TSLA"];
    const apiKey = "pk_371d103e1da24c888b5d09d12305b6f9";
    const promises = tickers.map(ticker => {
        const url = `https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=${apiKey}`;
        return axios.get(url);
    });
    try {
        //Waits for all the promises to resolve using the Promise.all method and maps over the responses
        const responses = await Promise.all(promises);
        const stocks = responses.map((response, index) => {
            // Add a corresponding web link (stock image) and assign to each response.
            response.data.stockImage = `https://storage.googleapis.com/iex/api/logos/${tickers[index]}.png`;
            return {
                companyName: response.data.companyName,
                latestPrice: response.data.latestPrice,
                symbol: response.data.symbol,
                change: response.data.change,
                changePercent: response.data.changePercent,
                stockImage: response.data.stockImage
            }
        });
        //Sends the stocks data as a json object to the client  
        res.json(stocks);
    } catch (error) {
        //Sends the error message to client as json object
        res.json({ error: error.message });
    }
});


//Starts the Express app to listen on port 5000 and logs a message to the console to indicate that the server is running.
app.listen(5000, () => console.log('Server listening on port 5000!'));