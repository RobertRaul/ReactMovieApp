import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { PopularMoviesResponse } from "../../../infraestructure/interface/movie.responses";
import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import { Movie } from "../../models/movie.model";


export const topRatedUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const nowPlaying = await fetcher.get<PopularMoviesResponse>('/top_rated');
        
        return nowPlaying.results.map(result=>MovieMapper.fromMovieDBResultToModel(result))
    }
    catch (error) {
        console.log(error)
        throw new Error('Error fetching movies - topRatedUseCase')
    }

}