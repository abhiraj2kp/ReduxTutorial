import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FirstScreen from '../Screens/FirstScreen';
import SecondScreen from '../Screens/SecondScreen';

const AppNavigator = createStackNavigator({
    FirstScreen : {screen : FirstScreen},
    SecondScreen : {screen : SecondScreen}
});

export default createAppContainer(AppNavigator);