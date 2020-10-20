import React,{useEffect,useState} from "react";
import {editAdventure} from "../api/Api";
import {
    TextField,
    Grid,
    Button,
    ListItemText,
    FormControl,
    InputLabel,
    FormControlLabel,
    Typography,
  } from "@material-ui/core";
  import Modal from "react-bootstrap/Modal";
  const EditAdventure = ({ adventure }: any) => {
    const [btnVisibility, setBtnVisibility] = useState(true);
  
    const handleSubmit = async (selectedAdventure: any) => {
      console.log(selectedAdventure);
    //   selectedAdventure.rating = Number(selectedMovie.rating);
      await editAdventure(selectedAdventure);
      setBtnVisibility(false);
    };
    const [adventureName, setAdventureName] = useState(adventure.adventureName);
    const [adventureDescription, setAdventureDescription] = useState(adventure.adventureDescription);
    const handleAdventureNameChange = (name: string) => {
        setAdventureName(name);
        adventure.adventureName = name;
      };
    
      const handleAdventureDescriptionChange = (description: string) => {
        setAdventureDescription(description);
        adventure.adventureDescription = description;
      };
      return(
          <div>
              <div>
              <p>Adventure Name</p>
              <TextField
                id="outlined-basic"
                variant="outlined"
                value={adventureName}
                onChange={(e) => handleAdventureNameChange(e.target.value)}
            />
            </div>
            <div>
              <p>Adventure Description</p>
              <TextField
                id="outlined-basic"
                variant="outlined"
                value={adventureDescription}
                onChange={(e) => handleAdventureDescriptionChange(e.target.value)}
            />
            </div>
            {btnVisibility && (
            <input
            type="submit"
             value="Save"
            onClick={(event) => handleSubmit(adventure)}
           />
      )}
          </div>
      );
}
export default EditAdventure;