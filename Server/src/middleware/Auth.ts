import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
    userName: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];
        console.log(token);
        const secretKey = process.env.JWT_SECRET_KEY || '';
        console.log(secretKey);
        jwt.verify(token,secretKey,(err, user) => {
            if(err) {
                console.log('Hello world!')
                return res.sendStatus(403);
            }

            req.user = user as JwtPayload;
            return next;
        });
    } else {
        res.sendStatus(401);
    }
};