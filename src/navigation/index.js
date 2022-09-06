import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

//Dashbord
import TriviaScreen,{screenOption as TriviaScreenOption} from '../screens/TriviaPage';
import OverviewScreen,{screenOption as OverviewScreenOption} from '../screens/TriviaPage/overview';
import EndScreen,{screenOption as EndScreenOption} from '../screens/TriviaPage/end';

const TriviaStackNavigetor=createStackNavigator();
export const TriviaStack = () => {
    return (
        <TriviaStackNavigetor.Navigator screenOptions={
            {
                headerStyle: {
                    backgroundColor:'#000000'
                },
                headerTintColor:'#fff',
                headerTitleStyle:{
                    fontWeight:'bold'
                },
                headerTitleAlign:'center'
                

            }} >
            <TriviaStackNavigetor.Screen name='Trivia' component={TriviaScreen} options={TriviaScreenOption}  />
            <TriviaStackNavigetor.Screen name='Overview' component={OverviewScreen} options={OverviewScreenOption} />
            <TriviaStackNavigetor.Screen name='end' component={EndScreen} options={EndScreenOption} />
           
        </TriviaStackNavigetor.Navigator>
    )
}



const AppBottomBarNavigetor =createMaterialBottomTabNavigator();
export const AppBottomBar = () => {
    return (
        <AppBottomBarNavigetor.Navigator  activeColor='#ffff' inactiveColor='#ff2'  barStyle={{ backgroundColor:'#000000' }}>
            <AppBottomBarNavigetor.Screen  options={{tabBarLabel:'Trivia',tabBarIcon:({ focused,color,size}) => {

return(<Entypo name='grid' color='#fff' size={26} />)
}}} 
 name='Trivia' component={TriviaStack}  />

        </AppBottomBarNavigetor.Navigator>
    )
}


