import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../../navigation/StackNavigation'
import { useDetail } from '../../hooks/useDetail'
import { MovieHeader } from '../../components/detail/MovieHeader'
import { MovieDetails } from '../../components/detail/MovieDetails'
import { ScrollView } from 'react-native-gesture-handler'

interface Props extends StackScreenProps<RootStackParams, 'Detail'> { };

export const DetailsCreen = ({ route }: Props) => {

  const { movieId } = route.params;

  const { isLoading, moviedetail, actores } = useDetail(movieId);
  

  if (isLoading) {
    return <Text>Cargando....</Text>
  }
  return (
    <ScrollView>
      <MovieHeader movie={moviedetail} />
      <MovieDetails movie={moviedetail} cast={actores} />


    </ScrollView>
  )
}
