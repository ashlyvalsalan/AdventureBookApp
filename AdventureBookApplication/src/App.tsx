import React, {useEffect,useState}from 'react';
import logo from './logo.svg';
import AdventureCard from './components/AdventureCard';
import {Welcome} from './components/Welcome';
import {Nav} from './components/Nav'
import './App.css';
import AddAdventure from "./components/AddAdventure";
import { Button } from "@material-ui/core";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import UserProfile from "./components/UserProfile";


function App() {
  const [isAdd, setIsAdd] = useState(false);

  const handleAddMovie = () => {
    setIsAdd(true);
  };
  return (
    <div className="container">
    <Nav/>
    <div className="UserDetails">
        <LoginButton />
        <LogoutButton />
        <UserProfile />
      </div>
    <Welcome/>  
    <AdventureCard/>
    <Button
          color="primary"
          variant="outlined"
          onClick={() => handleAddMovie()}
        >
          Add New Adventure
        </Button>
        {isAdd && <AddAdventure/>}
</div>
  );
}

export default App;
