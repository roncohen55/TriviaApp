import React, { useState, useEffect }from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import CountDown from 'react-native-countdown-component';

const QuesionItem = props => {

    
    const timeToTimer= () =>{
        if ((props.questionItem.id)+1 <=10){
          return 30
        }
        else if ((props.questionItem.id)+1 >10 && (props.questionItem.id)+1 <=15){
          return 20
        }
        else {
          return 10
        }
      }

return(
    <View style={{justifyContent:'center', alignItems: 'center'}}>
        <Text style={styles.questTitle}>{props.questionItem.title}</Text>
        {
            props.questionItem.answers.map((answer,index)=>(
                <TouchableOpacity style={styles.btn} key={index}  onPress={()=>{
                    props.onNextQuestion(props.questionItem.id);
                    props.onAnswer(answer);
                }}>
                    <Text style={styles.btnText}>{answer.title}</Text>
                </TouchableOpacity>
           ))
        }

<View>
      <CountDown 
        until={timeToTimer()}
        onFinish={() =>props.onNextQuestion(props.questionItem.id)}
        //digitStyle={Styles.timers}
        timeToShow={['S']}
        timeLabels={{s: null}}

        size={20}
      />
          </View>
    </View>
);

}

const styles = StyleSheet.create({
    questTitle:{fontSize:28,marginBottom:40},
    btn:{
        width:'100%',
        backgroundColor:'#fff',
        padding:15,
        borderRadius:12,
        marginBottom:12,
        shadowColor:'#000000',
        shadowOpacity:0.1,
        shadowOffset:{width:0, height:3},
        shadowRadius:2,elevation:5,
        

    },
    btnText:{fontSize: 22},

});

export default QuesionItem;
