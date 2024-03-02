// src/routes/userRoutes.ts
import express, { Request, Response } from 'express';

const router = express.Router();

// Define routes
router.get('/', (req: Request, res: Response) => {
  res.send('List of users');
});

router.get('/:userId', (req: Request, res: Response) => {
  const userId = req.params.userId;
  res.send(`User details for ID ${userId}`);
});

router.post('/', (req: Request, res: Response) => {
  // Handle creating a new user
  res.send('Create a new user');
});

router.put('/:userId', (req: Request, res: Response) => {
  const userId = req.params.userId;
  // Handle updating user details
  res.send(`Update user details for ID ${userId}`);
});

router.delete('/:userId', (req: Request, res: Response) => {
  const userId = req.params.userId;
  // Handle deleting a user
  res.send(`Delete user with ID ${userId}`);
});

export default router;
