
import AnimeSeries, { IAnimeSeries } from '../models/AnimeSeries';
class AnimeSeriesService {
  async createAnimeSeries(animeSeriesData: IAnimeSeries): Promise<IAnimeSeries> {
    try {
      if (animeSeriesData && animeSeriesData._id) {
        // Update the anime series if an _id exists in the data
        const updatedAnimeSeries = await AnimeSeries.findOneAndUpdate(
          { _id: animeSeriesData._id }, // Query to find the anime series by _id
          { $set: animeSeriesData },    // Update data
          { new: true, upsert: true }   // Return the updated document, insert if not found
        );
        return updatedAnimeSeries;
      }
  
      // If no _id exists, create a new anime series
      const animeSeries = new AnimeSeries(animeSeriesData);
      const savedAnimeSeries = await animeSeries.save();
      return savedAnimeSeries;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
  async editAnimeSeries(animeSeriesData: IAnimeSeries): Promise<IAnimeSeries> {
    // const { animename, description, count, scries,server } = req.body;
    
    try {
        // Delete all anime series entries associated with the specified server
    await AnimeSeries.deleteMany({ server: animeSeriesData.server });
      // await AnimeSeries.deleteMany({ server: server });

      // Create new anime series entry with updated data
      // const animeSeries = new AnimeSeries({ animename, description, count, server: server, scries });
  
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
