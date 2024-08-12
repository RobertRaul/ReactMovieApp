import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { getDetailMovieByIdUseCase } from '../../core/use-cases/detailmovie/get-by-id.usecase'
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter'
import { DetailMovie } from '../../core/models/movie.model'

export const useDetail = (movieId: number) => {

    const [isLoading, setIsLoading] = useState(true);
    const [moviedetail, setMovie] = useState<DetailMovie>();

    useEffect(() => {
        loadMovie();
    }, [movieId])

    const loadMovie = async () => {
        console.log(movieId);
        setIsLoading(true);
        const fullMov = await getDetailMovieByIdUseCase(movieDBFetcher, movieId)
        setMovie(fullMov);
        setIsLoading(false)
        console.log(fullMov);
    }

    return {
        isLoading,
        moviedetail
    }


}
