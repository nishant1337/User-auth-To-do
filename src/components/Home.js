import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../context/UserAuthContext";
import EditProfile from "./EditProfile";

const Home = () => {

  const mystyle = {
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    color: "black",
    width: "1000px",
  
  };


  const { logOut, user } = useUserAuth();

  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div style={mystyle} >
      <div className="p-4 box mt-3 text-center">
        Hello {user && user.displayName} 
      </div>
      <br/>

      <EditProfile/>
      <div className="p-4 d-grid gap-2">
        <Button variant="secondary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </div>
  );
};

export default Home;
