
import AnimeSeries, { IAnimeSeries } from '../models/AnimeSeries';
class AnimeSeriesService {
  async createAnimeSeries(animeSeriesData: IAnimeSeries): Promise<IAnimeSeries> {
    try {
      const animeSeries = new AnimeSeries(animeSeriesData);
      const savedAnimeSeries = await animeSeries.save();
      return savedAnimeSeries;
    } catch (error:any) {
      throw new Error(error.message);
    }
  }

  async getAllAnimeSeries(): Promise<IAnimeSeries[]> {
    try {
      
      
      const animeSeriesList = await AnimeSeries.find();
      return animeSeriesList;
    } catch (error:any) {
      throw new Error(error.message);
    }
  }
  async getAnimeSeriesById(animenames:any): Promise<IAnimeSeries[]> {
    try {
      let animeSeries ={
        animename:animenames.animename
      }
      const animeSeriesList = await AnimeSeries.find(animeSeries);
      return animeSeriesList;
    } catch (error:any) {
      throw new Error(error.message);
    }
  }
  async getAnimeAllSeries(): Promise<IAnimeSeries[]> {
    try {
      const animeSeriesList = await AnimeSeries.find();
      return animeSeriesList;
    } catch (error:any) {
      throw new Error(error.message);
    }
  }

  // Add other service methods for updating, deleting, and getting specific AnimeSeries
}

export default new AnimeSeriesService();
