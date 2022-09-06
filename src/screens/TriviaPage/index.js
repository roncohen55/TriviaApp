import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity, FlatList, ActivityIndicator,Image} from 'react-native';
import Style from '../../utility/appStyle.js'


const TriviaScreen = props => {

   
   
      return(
            <View style={Style.Container}>

                <View style={{width:'100%',height:'80%',backgroundColor:'#11468F'}}>
                <Image
                style={{height:"100%",width:'100%',resizeMode: "center"}}
                source={require("../splash_logo.png")}
                />

               
           
                </View>
                
                <View style={{width:'100%',height:'20%',backgroundColor:'#11468F',alignItems: 'center'}}>
               

               <TouchableOpacity 
               style={{backgroundColor:'#fff',alignItems: 'center',borderRadius:15,width:350,height:65,justifyContent:'center'}}
               onPress={() => {props.navigation.navigate('Overview')}}><Text> Let's Play</Text></TouchableOpacity>
          
               </View>





            
        </View>
      )
}

export const screenOption = navData =>{
    


        
       

    return{
        headerTitle:'QUIZ GAME',
     

        
    }
}

export default TriviaScreen;

