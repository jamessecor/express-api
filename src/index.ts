import 'dotenv/config';
import express from "express";
import cors from 'cors';
import * as apiRoutes from './routes/api';
import * as artworkRoutes from './routes/artworks';
import * as emailRoutes from './routes/email';
import * as storeRoutes from './routes/store';
import artworks2022 from './data/2022/artworks.json';

const app = express();
const port = 8080; // default port to listen

app.use(cors());
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.send(artworks2022);
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