import React from "react" ;
import {makeStyles} from "@material-ui/core/styles" ;
import Image from "./images/bg.jpg" ;
import { url } from "inspector";

 export const useStyle = makeStyles({

    root : {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    } , 
    score: {
      fontSize : 50 ,
      color :  '#33691e'
    } ,
  
    font : {
      fontSize: 80,
      color:  '#ff5252',
  
    },
    App : {
      backgroundImage:  `url(${Image})` ,
      textAlign: "center" ,
      padding: '50px' ,
      backgroundRepeat: "no-repeat" ,
      backgroundPosition: 'center' ,
      backgroundAttachment: "fixed" ,
      paddingBottom: '100%' ,


    },
    heading : {
      justifyContent: "Center" ,
    }, 
    loading : {
      color: '#ffd600' ,
      fontSize: 35 ,
    },
    questionno : {
      fontSize: 20 ,  
      color : '#f44336' ,
      fontWeight: 'bold'
    }  ,
    question : {
        fontSize: 35 ,
        color : "#795548",
        fontWeight: "bold" ,
     },
     options:{
         color : "#607d8b" ,
         fontSize: 26 ,
         fontWeight : 'bold' ,
     }
})