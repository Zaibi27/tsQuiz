import React from 'react' ;
import {answerObject} from '../App'
import Button from "@material-ui/core/Button" ;
import {makeStyles} from "@material-ui/core/styles" ;

import {useStyle}  from "../appstyle"



type props =  {
    question : string ;
    answers : string[] ;
    callback : (e: React.MouseEvent<HTMLButtonElement>) => void ;
    userAnswer : answerObject | undefined ;
    questionNr : number ;
    totalQuestions : number ;
}


 const QuestionCard: React.FC<props> = ({question , answers , callback , 
    userAnswer , questionNr , totalQuestions}) => {
        const classes = useStyle() ;
    return (<div >
        <p className={classes.questionno}>
            Question# : {questionNr} / {totalQuestions}
        </p>
        <p className={classes.question}dangerouslySetInnerHTML={{__html : question}} />
        <div>
            {answers.map(answer => (
                <div key = {answer}>
                    <Button className= {classes.options} disabled={!!userAnswer} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML= {{__html:  answer}} />
                    </Button>
                     
                </div>
            ))}
        </div>
    </div>
    )};
export default QuestionCard ; 