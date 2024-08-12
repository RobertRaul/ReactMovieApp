import React from 'react'
import { Image, Pressable, StyleSheet, View } from 'react-native'
import { Movie } from '../../../core/models/movie.model'
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParams } from '../../navigation/StackNavigation';

interface Propiedades {
    movie: Movie;
    height?: number;
    width?: number
}


export const MoviePoster = ({ movie, height = 420, width = 300 }: Propiedades) => {

    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <Pressable onPress={() => navigation.navigate('Detail', { movieId: movie.id })}
            style={({ pressed }) =>
            ({
                width,
                height,
                opacity: pressed ? 0.9 : 1,
                marginHorizontal: 5,
                paddingBottom: 20,
                paddingHorizontal: 5,
            })
            }>
            <View style={style.imageContainer }>
                <Image
                    style={style.image}
                    source={{ uri: movie.poster }}
                />
            </View>
        </Pressable>
    )
}

const style = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 9,        
    }
})
