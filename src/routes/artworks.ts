import * as express from 'express';
import artworks2022 from '../data/2022/artworks.json';
import artworks2021 from '../data/2021/artworks.json';
import artworks2020 from '../data/2020/artworks.json';
import artworks2019 from '../data/2019/artworks.json';
import artworks2018 from '../data/2018/artworks.json';
import artworks2017 from '../data/2017/artworks.json';
import artworks2016 from '../data/2016/artworks.json';
import artworks2015 from '../data/2015/artworks.json';
import artworks2014 from '../data/2014/artworks.json';
import artworks2013 from '../data/2013/artworks.json';
import artworks2012 from '../data/2012/artworks.json';
import * as R from 'ramda';
import Artwork from '../models/artwork';

export const register = (app: express.Application) => {
    const artworks = [
        ...artworks2022,
        ...artworks2021,
        ...artworks2020,
        ...artworks2019,
        ...artworks2018,
        ...artworks2017,
        ...artworks2016,
        ...artworks2015,
        ...artworks2014,
        ...artworks2013,
        ...artworks2012
    ];

    // All requests to artworks
    app.all("/api/artworks", (req, res, next) => {
        next();
    });

    app.get('/api/artworks/:id', (req, res) => {
        res.send(artworks.filter(x => x.id === req.params.id));
    });

    app.get("/api/artworks*", (req, res) => {
        let works = artworks;
        const query = req.query;
        if (!R.isEmpty(query)) {
            const hasYearQuery = query.year !== undefined && typeof query.year === 'string';
            const yearQuery = hasYearQuery ? query.year : null;

            const hasSearchQuery = query.search !== undefined && typeof query.search === 'string';
            const searchQuery = hasSearchQuery ? query.search as string : null;

            const applySearchQuery = (artwork: Artwork, search: string) => artwork.title.toLowerCase().includes(search) || artwork.media.toLowerCase().includes(search);

            if (hasYearQuery) {
                works = works.filter(artwork => artwork.year === yearQuery);
            }
            if (hasSearchQuery) {
                works = works.filter(artwork => applySearchQuery(artwork, searchQuery));
            }
        }
        res.send(works);
    });
};