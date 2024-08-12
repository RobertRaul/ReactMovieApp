import React, { useEffect, useState } from 'react'
import { Movie } from '../../core/models/movie.model'
import * as UseCases from '../../core/use-cases'
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter'

let curentPage = 1;

export const useMovies = () => {




    const [isLoading, setisLoading] = useState(true)
    const [nowPlaying, setNowPlaying] = useState<Movie[]>([])
    const [popular, setPopular] = useState<Movie[]>([])
    const [toprated, setToprated] = useState<Movie[]>([])
    const [upcoming, setUpcoming] = useState<Movie[]>([])


    useEffect(() => {
        initialLoad();
    }, [])


    const initialLoad = async () => {
        const nowPlayingMoviesPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher)
        const moviesPopularPromise = UseCases.moviesPopularUseCase(movieDBFetcher)
        const topRatedPromise = UseCases.topRatedUseCase(movieDBFetcher)
        const upcomingPromise = UseCases.upcomingUseCase(movieDBFetcher)


        const [
            nowPlayingMovies,
            moviesPopularMovies,
            topRatedMovies,
            upcomingMovies,
        ] = await Promise.all([
            nowPlayingMoviesPromise,
            moviesPopularPromise,
            topRatedPromise,
            upcomingPromise,
        ])

        setNowPlaying(nowPlayingMovies)
        setPopular(moviesPopularMovies)
        setToprated(topRatedMovies)
        setUpcoming(upcomingMovies)

        setisLoading(false);

        // console.log({
        //     nowPlayingMovies,
        //     moviesPopularMovies,
        //     topRatedMovies,
        //     upcomingMovies,
        // })
    }

    return {
        nowPlaying,
        popular,
        toprated,
        upcoming,
        isLoading,

        //metodos
        popularNextPage: async () => {
            curentPage++;
            const popularMovies = await UseCases.moviesPopularUseCase(movieDBFetcher,{
                page:curentPage,
            })

            setPopular(prev => [...prev,...popularMovies])
        }
    }

}
