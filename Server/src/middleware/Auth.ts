import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
    userName: string;
}

// export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
//     const authHeader = req.headers.authorization;

//     if (authHeader) {
//         const token = authHeader.split(' ')[1];
//         const secretKey = process.env.JWT_SECRET_KEY || '';
//         jwt.verify(token,secretKey,(err, userName) => {
//             if(err) {
//                 return res.sendStatus(403);
//             }
//             req.user = userName as JwtPayload;
//             return next;
//         });
//     } else {
//         res.sendStatus(401);
//     }
// };

export const authenticateToken = (

    req: Request,
  
    res: Response,
  
    next: NextFunction
  
  ) => {
  
    const authHeader = req.headers.authorization;
  
   
  
    if (authHeader) {
  
      const token = authHeader.split(' ')[1];
  
   
  
      const secretKey = process.env.JWT_SECRET_KEY || '';
  
   
  
      jwt.verify(token, secretKey, (err, user) => {
  
        if (err) {
  
          return res.sendStatus(403); // Forbidden
  
        }
  
        console.log(user);
  
        req.user = user as JwtPayload;
  
   
  
        return next();
  
      });
  
    } else {
  
      res.sendStatus(401); // Unauthorized
  
    }
  
  };