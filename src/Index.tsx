import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { StackNavigation } from './presentation/navigation/StackNavigation';

export const Index = () => {
    return (
        <NavigationContainer>
            <StackNavigation />
        </NavigationContainer>
    )
}

