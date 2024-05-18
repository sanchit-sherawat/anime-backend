// src/routes/animeSeriesRoutes.ts
import express, { Request, Response } from 'express';
import animeSeriesService from '../services/AnimeSeriesService';

const router = express.Router();

router.post('/animeSeries', async (req: Request, res: Response) => {
  try {
    const animeSeriesData = req.body;
    const savedAnimeSeries = await animeSeriesService.createAnimeSeries(animeSeriesData);
    res.status(201).json(savedAnimeSeries);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
});
router.post('/editanimeSeries', async (req: Request, res: Response) => {
  try {
    const animeSeriesData = req.body;
    const savedAnimeSeries = await animeSeriesService.editAnimeSeries(animeSeriesData);
    res.status(201).json(savedAnimeSeries);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/animeSeries', async (req: Request, res: Response) => {
  try {
    const animeSeriesList = await animeSeriesService.getAllAnimeSeries();
    res.json(animeSeriesList);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  } 
});
router.post('/animeSeriesbyname', async (req: Request, res: Response) => {
  try {
    // console.log(req)
    const animeSeriesData = req.body;
    const animeSeriesList = await animeSeriesService.getAnimeSeriesById(animeSeriesData);
    res.json(animeSeriesList);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  } 
});
router.post('/animeAllSeries', async (req: Request, res: Response) => {
  try {
    // console.log(req)
    const animeSeriesData = req.body;
    const animeSeriesList = await animeSeriesService.getAnimeAllSeries();
    res.json(animeSeriesList);
  } catch (error:any) {
    res.status(500).json({ error: error.message });
  } 
});

// Add other route handlers for updating, deleting, and getting specific AnimeSeries
// for the new routes 

export default router;
