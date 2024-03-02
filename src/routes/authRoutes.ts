// src/routes/authRoutes.ts
import express, { Request, Response } from 'express';
import { UserService } from '../services/UserService';
import { authenticateUser } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/signup', async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await UserService.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }

    const newUser = await UserService.createUser(username, email, password);
    res.status(201).json({ user: newUser });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.post('/login', authenticateUser, async (req: Request, res: Response) => {
  // This route is protected by the authenticateUser middleware
  // If the middleware passes (user is authenticated), you can proceed with the login logic

  const { email, password } = req.body;

  try {
    const user = await UserService.findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const passwordMatch = await UserService.comparePasswords(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Implement token generation or session handling here
    const token = await UserService.generateAuthToken(user);
    // Return a token or set a session cookie upon successful login
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

export default router;
