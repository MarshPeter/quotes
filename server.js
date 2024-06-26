const express = require("express");
const app = express();

const { quotes } = require("./data");
const { getRandomElement, getElementsBasedOffKeyAndValue } = require("./utils");

const PORT = process.env.PORT || 4001;

app.use(express.static("public"));

app.get("/api/quotes/", (req, res, next) => {
    if (Object.keys(req.query).length === 0) {
        res.send(quotes);
        return;
    }

    const person = req.query.person;
    const arrayItems = getElementsBasedOffKeyAndValue(quotes, "person", person);

    res.send(arrayItems);
});

app.get("/api/quotes/random", (req, res, next) => {
    const randomQuote = getRandomElement(quotes);

    res.json({ quote: randomQuote });
});

app.post("/api/quotes", (req, res, next) => {
    const newQuote = req.query;

    if (
        Object.keys(req.query).length === 0 ||
        !newQuote.quote ||
        !newQuote.person
    ) {
        res.status(400).send();
        return;
    }

    quotes.push(newQuote);

    res.status(201).send(newQuote);
});

app.listen(PORT, () => {
    console.log(`Listening on PORT: ${PORT}`);
});
