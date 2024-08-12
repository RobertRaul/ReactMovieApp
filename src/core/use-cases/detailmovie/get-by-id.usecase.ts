
import React from 'react'
import { HttpAdapter } from '../../../config/adapters/http/http.adapter'
import { DetailMovie } from '../../models/movie.model'
import { MovieMapper } from '../../../infraestructure/mappers/movie.mapper'
import { MovieDetailInfraes } from '../../../infraestructure/interface/movie.responses'

export const getDetailMovieByIdUseCase = async (
    fetcher: HttpAdapter,
    movieId: number,
): Promise<DetailMovie> => {


    try {
        const detailMovie = await fetcher.get<MovieDetailInfraes>(`/${movieId}`)
        const fullMovie = MovieMapper.fromDetailMovieDBToModel(detailMovie)
        return fullMovie;
    }
    catch (error) {
        throw new Error(`Cannot get movie by id: ${movieId}`)
    }

}