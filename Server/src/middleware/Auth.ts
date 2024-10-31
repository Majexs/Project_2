import {request, resp, nextFunc} from '../types/express/index.d.ts';

import jwt from 'jsonwebtoken';

interface JwtPayload {
    user: string;
}

export const authenticateToken = (req = request, res = resp,next = nextFunc) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        const secretKey = process.env.JWT_SECRET_KEY || '';

        jwt.verify(token,secretKey,(err, user) => {
            if(err) {
                return res.sendStatus(403);
            }

            req.user = user as JwtPayload;
            return next;
        });
    } else {
        res.sendStatus(401);
    }
};