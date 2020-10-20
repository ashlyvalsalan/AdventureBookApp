import React,{Component} from 'react'
import welcomeImage from "../Images/home-twitter.jpg";
export function Welcome(){
    return(
          <div>
              <img className="welcomeClass" src={welcomeImage} alt="welcome logo"/>
               
          </div>     
      
    )

}