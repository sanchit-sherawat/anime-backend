// src/middleware/authMiddleware.ts
import axios from 'axios';
import { Request, Response, NextFunction } from 'express';

export async function authenticateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
  // Implement your authentication logic here
  // This middleware verifies the user's token or session using the Golang API
  await verifyTokenWithGolang(req, res, next);
}

const verifyTokenWithGolang = async (req: any, res: Response, next: NextFunction): Promise<void> => {
  const token = req.headers['authorization']?.split(' ')[1]; // Extract token from Authorization header

  if (!token) {
       res.status(403).send({ message: 'No token provided!' });
       return
  }

  try {
      const response = await axios.get('http://localhost:8081/verify-token', {
          params: {
              token: token
          }
      });

      if (response.status === 200) {
          req.user = response.data.claims; // Attach the claims to the request object
          next(); // Proceed to the next middleware or route handler
      } else {
          res.status(401).send({ message: 'Unauthorized' });
      }
  } catch (error: any) {
      res.status(401).send({ message: 'Unauthorized', error: error.message });
  }
};
