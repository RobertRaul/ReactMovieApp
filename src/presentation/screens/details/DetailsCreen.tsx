import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../../navigation/StackNavigation'
import { useDetail } from '../../hooks/useDetail'

interface Props extends StackScreenProps<RootStackParams, 'Detail'> { };

export const DetailsCreen = ({ route }: Props) => {

  const { movieId } = route.params;

  const { } = useDetail(movieId);
  return (
    <View>
      <Text></Text>
    </View>
  )
}
