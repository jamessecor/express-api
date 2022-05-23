import 'dotenv/config';
import express from "express";
import cors from 'cors';
import * as apiRoutes from './routes/api';
import * as artworkRoutes from './routes/artworks';
import * as emailRoutes from './routes/email';
import * as storeRoutes from './routes/store';

const app = express();
const port = 8080; // default port to listen

app.use(cors());
app.use(express.static('public'));

// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("Hello world!");
});

app.get("/status", (req, res) => {
    const db = ''; // dbOperations.selectQuery;
    res.send(db);
});

apiRoutes.register(app);
artworkRoutes.register(app);
emailRoutes.register(app);
storeRoutes.register(app);

// start the Express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${port}`);
});