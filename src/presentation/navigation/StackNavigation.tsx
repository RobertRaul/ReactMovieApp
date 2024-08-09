import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { DetailsCreen } from '../screens/details/DetailsCreen';

export type RootStackParams ={
    Home:undefined;
    Detail:{movieId:number};
}

const Stack = createStackNavigator<RootStackParams>();

export function StackNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailsCreen} />      
    </Stack.Navigator>
  );
}