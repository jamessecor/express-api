import * as express from 'express';
import { sendEmail } from '../models/email';

export const register = (app: express.Application) => {
    app.get("/api/send-email", (req, res) => {
        const emailResponse = sendEmail(req?.query?.email?.toString() ?? '', req?.query?.subject?.toString() ?? '', req?.query?.emailText?.toString() ?? '');

        res.send(emailResponse);
    });
};