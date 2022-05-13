import * as express from 'express';
import artworks from '../data/artworks.json';
import * as R from 'ramda';
import Artwork from '../models/artwork'

export const register = (app: express.Application) => {
    // All requests to artworks
    app.all("/api/artworks*", (req, res, next) => {
        // if (!R.isEmpty(req.query)) {
        next();
        // }
    });

    app.get("/api/artworks", (req, res) => {
        let works: Artwork[] = [];
        const query = req.query;
        if (!R.isEmpty(query)) {
            if (query.year !== undefined && typeof query.year === 'string') {
                works = artworks.filter(x => x.year.toString() === query.year)
            }
        } else {
            works = artworks;
        }
        res.send(works);
    });

    app.get('/api/artworks/:id', (req, res) => {
        res.send(req.params)
    });
};