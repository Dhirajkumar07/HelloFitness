import React from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import GridViewIcon from "@mui/icons-material/GridView";
import LoginIcon from "@mui/icons-material/Login";
import './HelloFitness.css'


const HellowFitness = () => {
  return (
    <>
      <div
        className="navbar"
        style={{ boxShadow: "0 0.9rem 1.1rem 0 rgb(209, 209, 209)" }}
      >
        <div
          className="logo"
          style={{
            width: "60px",
            height: "60px",
            margin: "0 10px",
            borderRadius: "50%",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <h6
            style={{
              textAlign: "center",
              margin: "10px auto",
              fontSize: "30px",
            }}
          >
            HF
          </h6>
        </div>
        <div
          className="midnav"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            textAlign: "center",
          }}
        >
          <div className="midnav_1">
            <VideocamIcon />
            <h6>LIVE</h6>
          </div>
          <div className="midnav_2">
            <CardMembershipIcon />
            <h6>MEMBERSHIPS</h6>
          </div>
          <div className="midnav_3">
            <DirectionsRunIcon />
            <h6>PLANS</h6>
          </div>
          <div className="midnav_4">
            <GridViewIcon />
            <h6>MORE</h6>
          </div>
        </div>

        <div className="rightnav" style={{ margin: "0 10px" }}>
          <LoginIcon />
          <h6> Login</h6>
        </div>
      </div>

       <div className="hero">
          <h1 style={{position:'absolute',left:'100px',top:'120px'}}>Runner's Workout</h1>
          <div className="main_section"style={{width:'1350px',height:'450px',boxShadow: "0 0.3rem 0.5rem 0 rgb(209, 209, 209)",borderRadius:'10px',overflow:'hidden',position:'absolute',top:'200px',left:'100px',display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}}>
            <div className="img_1">
                <img className="image_1" src="https://wallpapercave.com/wp/wp10614126.jpg" alt="img_1" />
            </div>
            <div className="img_2">
                <img className="image_2" src="https://wallpapercave.com/wp/wp10614109.jpg" alt="img_2" />
            </div>
            <div className="img_3">
                <img className="image_3" src="https://wallpapercave.com/wp/wp5431335.jpg" alt="img_3" />
            </div>
          </div>
       </div>
     

    </>
  );
};

export default HellowFitness;
