import { HttpAdapter } from "../../../config/adapters/http/http.adapter";
import { NowPlayingResponse } from "../../../infraestructure/interface/movie.responses";
import { MovieMapper } from "../../../infraestructure/mappers/movie.mapper";
import { Movie } from "../../models/movie.model";


export const moviesNowPlayingUseCase = async (fetcher: HttpAdapter): Promise<Movie[]> => {
    try {
        const popular = await fetcher.get<NowPlayingResponse>('/now_playing');

        return popular.results.map(result => MovieMapper.fromMovieDBResultToModel(result))
    }
    catch (error) {
        console.log(error)
        throw new Error('Error fetching movies - moviesNowPlayingUseCase')
    }

}