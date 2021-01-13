import React from "react";


function Head()
{
    const date =  new Date();
    const time = date.getHours();
    let display ;
    const customcolor =
    {
      color : " "
    }
    if (time < 12) {
         display = "goodmorning";
         customcolor.color = "red";
       }else if (time < 18) {      
           display = "goodafternoon";
           customcolor.color = "green";
       }else{
           display = "goodnight";
           customcolor.color = "blue" ;
       }
       return <h1 className="nun" style={customcolor}>{display}</h1>
}
export default Head;