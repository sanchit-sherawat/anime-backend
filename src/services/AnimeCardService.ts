// src/services/AnimeCardService.ts
import AnimeCard, { IAnimeCard } from '../models/AnimeCard';

class AnimeCardService {
  async createAnimeCard(animeCardData: IAnimeCard): Promise<IAnimeCard> {
    try {
      const animeCard = new AnimeCard(animeCardData);
      const savedAnimeCard = await animeCard.save();
      return savedAnimeCard;
    } catch (error:any) {
      throw new Error(error.message);
    }
  }
  async updateAnimeCard(animeCardData: IAnimeCard): Promise<any> {
    try {
      let query = { animename: animeCardData.animename };
      const getanimecard = await AnimeCard.findOne(query);
      if(getanimecard){
        const animeCard = {
          animename: animeCardData.animename,
          description: animeCardData.description,
          totalEpisode: animeCardData.totalEpisode,
          posterURL: animeCardData.posterURL
        }
        const result = await AnimeCard.replaceOne(query, { animeCard});
        return result;
      }

      const animeCard = new AnimeCard(animeCardData);
      const savedAnimeCard = await animeCard.save();
      return savedAnimeCard;
    } catch (error:any) {
      throw new Error(error.message);
    }
  }

  async getAllAnimeCards(): Promise<IAnimeCard[]> {
    try {
      const animeCards = await AnimeCard.find();
      return animeCards;
    } catch (error:any) {
      throw new Error(error.message);
    }
  }

  // Add other service methods for updating, deleting, and getting specific AnimeCards
}

export default new AnimeCardService();
