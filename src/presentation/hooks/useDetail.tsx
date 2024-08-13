import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter'
import { DetailMovie } from '../../core/models/movie.model'
import { Cast } from '../../core/models/cast.model'
import { getDetailMovieByIdUseCase, getMovieCastUseCase }  from '../../core/use-cases'


export const useDetail = (movieId: number) => {

    const [isLoading, setIsLoading] = useState(true);
    const [moviedetail, setMovie] = useState<DetailMovie>();
    const [actores, setActores] = useState<Cast[]>();
    useEffect(() => {
        loadMovie();
    }, [movieId])

    const loadMovie = async () => {
        setIsLoading(true);

        const fullMovPromise = getDetailMovieByIdUseCase(movieDBFetcher, movieId)
        const castPromise = getMovieCastUseCase(movieDBFetcher, movieId)

        const [fullMov, Cast] = await Promise.all([fullMovPromise, castPromise])


        setMovie(fullMov);
        setActores(Cast);


        setIsLoading(false)        

    }

    return {
        isLoading,
        moviedetail,
        actores
    }


}
