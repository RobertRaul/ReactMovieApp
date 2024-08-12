import React from 'react'
import { Text, View } from 'react-native'
import { useMovies } from '../../hooks/useMovies'
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';
import { HorizontalCarousel } from '../../components/movies/HorizontalCarousel';

export const HomeScreen = () => {


  const { top } = useSafeAreaInsets();
  const { isLoading, nowPlaying, popular , toprated,upcoming,popularNextPage} = useMovies();

  if (isLoading) {
    return (<Text>Cargando...</Text>)
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
        {/*Carrucel principal*/}
        <PosterCarousel movies={nowPlaying} />
        {/*Carrucel de populares*/}
        <HorizontalCarousel movies={popular} title={"Populares"} loadNextPage={popularNextPage} />
        {/*Carrucel de populares*/}
        <HorizontalCarousel movies={toprated} title={"Mejor Calificadas"} />
        {/*Carrucel de populares*/}
        <HorizontalCarousel movies={upcoming} title={"Proximamente"} />
      </View>
    </ScrollView>
  )
}
