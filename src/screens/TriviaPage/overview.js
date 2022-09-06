import React,{useState, useEffect}from 'react';
import { StyleSheet, Text, View ,TouchableOpacity,Image,FlatList, ActivityIndicator} from 'react-native';
import QuesionItem from './QuestionItem';
import Style from '../../utility/appStyle.js'
const OverviewScreen = props => {

  let  tempQuestionsArr = [];

  const [questions,setQuestions] = useState([]);
  const [nextQuestion,setNextQuestion] = useState(0);
  const [currentQeustion,setCurrentQuestion] = useState(0);
  const [numberTrue,setNumberTrue] = useState(0);
  


  useEffect(async () =>{
    const baseUrl = 'https://opentdb.com/api.php?amount=20&category=18';
    const response = await fetch(baseUrl,{method: 'GET'});
    const newData = await response.json();

    let questionId=0;

    newData.results.forEach(question => {

      let answers = [];

      //correct
      const correct_answer = { title: question.correct_answer,isCorrect: true };
      answers.push(correct_answer);

      //incorrect
      question.incorrect_answers.forEach(item => {
      const incorrect_answer = { title: item,isCorrect: false };
      answers.push(incorrect_answer);
      });
      
      const format_question = {
        id: questionId++,
        title: question.question,
        type: question.type,
        category :question.category,
        difficulty: question.difficulty,
        answers: shuffle(answers)
      }

      tempQuestionsArr.push(format_question);

    });


    console.log(JSON.stringify(tempQuestionsArr));
    setQuestions(tempQuestionsArr);
  },[]) 


    const shuffle = (arr) =>{
      let currentIndex = arr.length,randomIndex;

      while(currentIndex != 0){

        randomIndex = Math.floor(Math.random()* currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
      }
      return arr;
    }

    const onNextQuestion = () => {
      let number =currentQeustion;
      number++;
      setCurrentQuestion(number);
      let nextQuest = questions[currentQeustion].id;
      setNextQuestion(nextQuest);
    }

    const onAnswer = (answer) => {
      let num=numberTrue;
      if(answer.isCorrect===true){
        num++;
        setNumberTrue(num);
      }
      console.log(JSON.stringify(answer))
      console.log(numberTrue)
    }

    const questionsUI=questions.map((question, index) =>{
      if(nextQuestion == question.id){
        return <QuesionItem 
        key={index} 
        questionItem={question}
        onNextQuestion = {onNextQuestion}
        onAnswer = {onAnswer}
         />
      }
    })

    

    return(
        <View style={Style.Container1}>
          <Text>Qustion {questions.length}/{currentQeustion}</Text>
          {
            questions.length > currentQeustion ? (questionsUI ):
            (
            
             
            <TouchableOpacity 
            style={{backgroundColor:'#fff',alignItems: 'center',borderRadius:15,width:350,height:65,justifyContent:'center'}}
            onPress={() => {props.navigation.navigate('end',{number_True:numberTrue})}}><Text> Go To Results</Text>
            </TouchableOpacity>
            )
          }

        
          
       
        </View>
    )
}

export const screenOption = navData =>{
    return{
        headerTitle:'QUSTION'


    }
}

export default OverviewScreen

