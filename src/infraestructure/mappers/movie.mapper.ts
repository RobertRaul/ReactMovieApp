import { DetailMovie, Movie } from "../../core/models/movie.model";
import { MovieDetailInfraes, Result } from "../interface/movie.responses";

export class MovieMapper {
    static fromMovieDBResultToModel(result: Result): Movie {
        return {
            id: result.id,
            title: result.title,
            description: result.overview,
            releaseDate: new Date(result.release_date),
            rating: result.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
        }
    }

    static fromDetailMovieDBToModel(result: MovieDetailInfraes): DetailMovie {
        return {
            id: result.id,
            title: result.title,
            description: result.overview,
            releaseDate: new Date(result.release_date),
            rating: result.vote_average,
            poster: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
            backdrop: `https://image.tmdb.org/t/p/w500${result.backdrop_path}`,
            genres: result.genres.map(gen => gen.name),
            duration: result.runtime,
            budget: result.budget,
            originalTitle: result.original_title,
            productionCompanies: result.production_companies.map(com => com.name)
        }
    }
}