import React, { useState, useEffect }from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Image,FlatList, ActivityIndicator} from 'react-native';
import Style from '../../utility/appStyle.js'
const EndScreen = (props) => {

   
   
    return(
        <View style={Style.Container}>
             
             {
            props.route.params.number_True > 9 ?
            (
                
                <View style={{width:'100%',height:'80%',backgroundColor:'#11468F',alignItems: 'center',justifyContent:'center'}}>
                    <Text style={{fontSize:20,color:'#7CFC00'}}>Great Job</Text>
                    <Text>You answers {props.route.params.number_True} the question correctly</Text>
                <Image
                style={{height:"100%",width:'100%',resizeMode: "center"}}
                source={require("../success_character.png")}
                />

               
                <Text style={{color:'#7CFC00'}}>correctAns:{props.route.params.number_True}</Text>
                </View>
            ):
            (
                
                <View style={{width:'100%',height:'80%',backgroundColor:'#11468F',alignItems: 'center',justifyContent:'center'}}>
                    <Text style={{fontSize:20,color:'#FF0000'}}>FAILD</Text>
                    <Text>You need to answer 10 correct answers</Text>
                <Image
                style={{height:"80%",width:'100%',resizeMode: "center"}}
                source={require("../failed_character.png")}
                />

                <Text style={{color:'#FF0000'}}>correctAns:{props.route.params.number_True}</Text>
           
                </View>
            )
             }
         


            
    
         
        </View>
    )
}

export const screenOption = navData =>{
    return{
        headerTitle:'Play Again'

    }
}

export default EndScreen

