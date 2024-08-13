import React from 'react'
import { Text, View } from 'react-native'
import { DetailMovie } from '../../../core/models/movie.model'
import { Formatter } from '../../../config/helpers/formatter'
import { Cast } from '../../../core/models/cast.model';
import { FlatList } from 'react-native-gesture-handler';
import { CastActor } from '../actores/CastActor';

interface Props {
    movie: DetailMovie;
    cast: Cast[];
}


export const MovieDetails = ({ movie, cast }: Props) => {
    return (
        <>
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text>
                        Rating {movie.rating}
                    </Text>

                    <Text style={{ marginLeft: 5 }}>
                        {movie.genres.join(', ')}
                    </Text>
                </View>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Historia:
                </Text>

                <Text style={{ fontSize: 16, marginTop: 5 }}>
                    {movie.description}
                </Text>

                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold' }}>
                    Presupuesto
                </Text>

                <Text style={{ fontSize: 23, marginTop: 10 }}>
                    {Formatter.currency(movie.budget)}
                </Text>


                <View style={{ marginTop: 20, marginBottom: 20 }}>
                    <Text style={{ fontSize: 23, fontWeight: 'bold' }}>
                        Actores
                    </Text>
                </View>

                <FlatList data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => <CastActor actor={item} />}

                />
            </View >



        </>
    )
}
