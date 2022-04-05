import * as express from 'express';
import { authenticateRequest } from '../authentication/authenticate'

const whitelistedApiRoutes = ['GET'];

export const register = (app: express.Application) => {
    app.all("/api*", (req, res, next) => {
        if (whitelistedApiRoutes.includes(req.method.toString()) || authenticateRequest(req)) {
            next();
        } else {
            res.sendStatus(403);
        }
    });
}