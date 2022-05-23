import * as express from 'express';
import storeItems from '../data/store.json';
import StoreItem from '../models/StoreItem';
import * as R from 'ramda';

export const register = (app: express.Application) => {
    let items: StoreItem[] = [];
    app.get("/api/store", (req, res, next) => {
        const query = req.query;
        if (!R.isEmpty(query)) {
            if (query.group !== undefined && typeof query.group === 'string') {
                items = storeItems.filter(x => x.group.toString() === query.group)
            }
        } else {
            items = storeItems;
        }

        res.send(items);
    });
}