import React,{useEffect, useState } from "react";
import { Grid, CardActionArea, CardContent, Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Modal from "react-bootstrap/Modal";
import Adventure from "../components/Adventure";
import getAdventures from "../api/Api";
  interface IAdventureCard{
    name: any[];
    description: any[];
    adventureId: any[];
  }
  const AdventureCard=()=>{
    const [adventures, setAdventures]=useState([]);
    useEffect(()=>{
      (async ()=>{
        const adventuresData = await getAdventures();
        setAdventures(adventuresData); 
      })();
    },[]);
    const adventureList= adventures.map((adventure:any)=>(
      <Adventure key={adventure.adventureId} adventure={adventure}/>
    ));
    return <div className="AdventureCard">{adventureList}</div>
  }
  export default AdventureCard;


