import React from 'react'
import { HttpAdapter } from '../../../config/adapters/http/http.adapter'
import { MovieCastResponse } from '../../../infraestructure/interface/movie.responses';
import { CastMapper } from '../../../infraestructure/mappers/cast.mapper';
import { Cast } from '../../models/cast.model';

export const getMovieCastUseCase = async (fetcher: HttpAdapter, movieId: number): Promise<Cast[]> => {
    try {
        const { cast } = await fetcher.get<MovieCastResponse>(`/${movieId}/credits`);
        const actores = cast.map(actor => CastMapper.fromMovieDBCastToModel(actor))
        return actores;

    }

    catch (error) {
        throw new Error(`Cannot get movie cast ${movieId}`);

    }
}