// src/routes/animeCardRoutes.ts
import express, { Request, Response } from 'express';
import animeCardService from '../services/AnimeCardService';
import { authenticateUser } from '../middleware/authMiddleware';

const router = express.Router();
router.use(authenticateUser)

router.post('/anime-cards', async (req: Request, res: Response) => {
  try {
    const animeCardData = req.body;
    const savedAnimeCard = await animeCardService.updateAnimeCard(animeCardData);
    res.status(201).json(savedAnimeCard);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
});
router.post('/update-anime-cards', async (req: Request, res: Response) => {
  try {
    const animeCardData = req.body;
    const savedAnimeCard = await animeCardService.createAnimeCard(animeCardData);
    res.status(201).json(savedAnimeCard);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/anime-cards', async (req: Request, res: Response) => {
  try {
    const animeCards = await animeCardService.getAllAnimeCards();
    res.json(animeCards);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  }
});

// Add other route handlers for updating, deleting, and getting specific AnimeCards

export default router;
