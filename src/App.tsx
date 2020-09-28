import React , {useState} from 'react';
import QuestionCard from "./components/QuestionCard" ;
import {fetchQuizQuestions}  from './API' ;
import {Difficulty , QuestionsState} from "./API" ;
import Button from '@material-ui/core/Button'; 
import Box from '@material-ui/core/Box';
//import {useStyle} from "./appstyle" ;
import {makeStyles} from "@material-ui/core/styles" ;
import {useStyle} from "./appstyle"




export type answerObject = {
  question : string ;
  answer: string ;
  
  correctAnswer: string ;
}
const TOTAL_QUESTIONS = 10 ;
const App =() => {
  //Loading state
  const  [getLoading , setLoading]  = useState(false) ;
  //Question array where all questions will reside
  const [getQuestions, setQuestions] = useState <QuestionsState[]>([]) ;

  const [getNumber , setNumber] = useState(0) ;

  //An array of answers selected by the user
  const [getuserAnswer , setUserAnswer] = useState <answerObject[]>([]) ;
   //Score of the user
  const [getScore , setScore] = useState(0) ;

  //game over hook decide whetherr to end the game or not
  const [getGameOver ,  setGameOver]  = useState(true) ;
  
  console.log(getQuestions) 

  const startQuiz = async () => {
    setLoading(true) ;
    setGameOver(false) ;

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS , Difficulty.EASY) ;

    setQuestions(newQuestions) ;
    setScore(0) ;
    setUserAnswer([]) ;
    setNumber(0) ;
    setLoading(false) ;

    


  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(!getGameOver){
      //user Answer 
      const answer = e.currentTarget.value ;
      //check value 
      const correctAnswer = getQuestions[getNumber].correct_answer === answer ;
      if(correctAnswer){
        setScore(prev => prev+1)
      } ;
      //save answer in the array of user answer

      const answerObject = {
        question : getQuestions[getNumber].question ,
        answer,
        
        
        correctAnswer : getQuestions[getNumber].correct_answer ,
      }
      setUserAnswer((prev) => [...prev , answerObject])
    }

  }

  const nextQuestion = () => {
    // move on to the next question if not the last
    const next = getNumber +1  ;
    if(next === TOTAL_QUESTIONS){
      setGameOver(true) ;

    }
    else{
      setNumber(next) ;
    }

  }

  const classes = useStyle() ;

  return (

   <body className= {classes.App}>
    
    
    <div >
      <div className = {classes.heading}>
     <p className={classes.font}>My Quiz </p>
     </div>
     {getGameOver || getuserAnswer.length === TOTAL_QUESTIONS ? (
     <Button  className={classes.root}  onClick={startQuiz}>
       Start
     </Button>
  ) : null}

     { !getGameOver ? <p className={classes.score}> Your Score : {getScore}</p> : null}

     {/* Similar technique using && */}
     {getLoading && <p className={classes.loading}>Loading Questions....</p>}

     { !getLoading && !getGameOver && (
     
     <QuestionCard 
     questionNr={getNumber + 1}
     totalQuestions={TOTAL_QUESTIONS}
     question = {getQuestions[getNumber].question}
     answers = {getQuestions[getNumber].answers}
     userAnswer = {getuserAnswer ? getuserAnswer[getNumber] : undefined }
     callback = {checkAnswer}
     
     />) }

     {!getGameOver && !getLoading && getuserAnswer.length === getNumber + 1 && getNumber !== TOTAL_QUESTIONS -1 
     
     ? ( 
     <Button className={classes.root} size="small"  onClick={nextQuestion}> NEXT </Button>
     ) : null }

     
    </div>
    </body>
    
  );
}

export default App;
