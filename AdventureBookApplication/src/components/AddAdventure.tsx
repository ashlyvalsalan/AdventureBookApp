import React, { useEffect, useState } from "react";
import { addAdventure } from "../api/Api";
import { TextField, Button } from "@material-ui/core";
import Modal from "react-bootstrap/Modal";

const AddAdventure= () => {
    const [btnVisibility, setBtnVisibility] = useState(true);
    const [adventure, setAdventure] = useState({
      adventureStruct: {
        adventureName: "",
        adventureDescription: "",
        
      },
    });
    const handleSubmit = async () => {
        console.log("submit");
        console.log(adventureName, adventureDescription);    
        setAdventure({
          ...adventure,
          adventureStruct: {
            adventureName: adventureName,
            adventureDescription: adventureDescription,
        
          },
        });
    
        await addAdventure(adventure);
        setBtnVisibility(false);
      };
      const [adventureName, setAdventureName] = useState("");
      const [adventureDescription, setAdventureDescription] = useState("");

      const handleAdventureNameChange = (name: string) => {
        setAdventureName(name);
      };
      const handleAdventureDescriptionChange = (description: string) => {
        setAdventureDescription(description);
      };

      useEffect(() => {
        setAdventure({
            ...adventure,
            adventureStruct: {
              adventureName: adventureName,
              adventureDescription: adventureDescription
            },
          });
      }, [adventureName, adventureDescription]);
      return(
        <div className="Form-Layout">
        <div className="Text-Fields">
          <p>Adventure Name</p>
          <TextField
            id="outlined-basic"
            variant="outlined"
            value={adventureName}
            onChange={(e) => setAdventureName(e.target.value)}
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
          <input type="submit" value="Save" onClick={() => handleSubmit()} />
        )}
      </div>
      );
};
export default AddAdventure;