import React from 'react'
import { Movie } from '../../../core/models/movie.model';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';
import { MoviePoster } from './MoviePoster';


interface Propiedades {
    movies: Movie[];
    height?: number;
}

export const PosterCarousel = ({ height = 440, movies }: Propiedades) => {
    return (
        <View style={{ height }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {
                    movies.map(peli => <MoviePoster key={peli.id} movie={peli} ></MoviePoster>)
                }
            </ScrollView>
        </View>
    )
}
