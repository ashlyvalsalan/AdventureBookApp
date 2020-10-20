import React,{Component, useState, useEffect} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import{Grid, Paper,Card,CardActionArea, CardContent,Button} from "@material-ui/core";
import AdventureCard from "./AdventureCard";
import Typography from "@material-ui/core/Typography";
import EditAdventure from "./EditAdventure";
import {GetAdventureById} from "../api/Api";
import {deleteAdventure} from "../api/Api";
import Modal from "react-bootstrap/Modal";
import EditButonImage from "../Images/EditIcon.svg";
import DeleteButonImage from "../Images/DeleteIcon.svg";
import DeleteHoveredButonImage from "../Images/DeleteHoveredIcon.svg";
import '../App.css';
interface IAdventureCardProps{
    adventureName:any[];
    adventureDescription:any[];  
    adventureId:number;
}
const Adventure=({adventure}:any)=>{
  const [editAdventure, setEditAdventure] = useState({});
  const [edit, setEdit] = useState(false);

  const onEditClick = async (adventureId: any) => {
    const adventureData = await GetAdventureById(adventureId);
    console.log(adventureData);
    const editAdventureData = adventureData;
    setEditAdventure(editAdventureData);
    setEdit(true);
  };
  const selectedAdventure= <EditAdventure adventure={editAdventure} />;
  const [imgSrc, setImgSrc] = useState(DeleteButonImage);
  const onDeleteHovered = (isHovered: boolean) => {
    if (isHovered) {
      setImgSrc(DeleteHoveredButonImage);
    } else {
      setImgSrc(DeleteButonImage);
    }
  };
  const onDeleteClick = async (adventureId: any) => {
    if (window.confirm("Are you sure want to delete the adventure?")) {
      console.log(adventureId);
      await deleteAdventure(adventureId);
    }


  };
  function MyVerticallyCenteredModal(props: any) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit Adventure
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{selectedAdventure}</Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  const [modalShow, setModalShow] = useState(false);
  if (!edit) {
    return (
      <div>
        <Card className="AdventureCardContainer">
          <CardActionArea>
            <CardContent className="AdventureCardContent">
              <Button
                variant="contained"
                color="primary"
                onClick={() => {
                  onEditClick(adventure.adventureId);
                  setModalShow(true);
                }}
              >Edit
                {/* <img src={EditButonImage} alt="Edit" /> */}
              </Button>
              <Button
                variant="contained"
                color="primary"
                onMouseOver={() => onDeleteHovered(true)}
                onMouseLeave={() => onDeleteHovered(false)}
                onClick={() => onDeleteClick(adventure.adventureId)}
              >Delete
                {/* <img src={imgSrc} alt="Edit" /> */}
              </Button>

              <Typography component="p" className="AdventureCardDetails">
                {adventure.adventureName}
              </Typography>
              <Typography component="p" className="AdventureCardDetails">
                {adventure.adventureDescription}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </div>
    );
  } else {

    return (
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    );
  }
};
export default Adventure;


