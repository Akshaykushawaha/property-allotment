import React, { useState, useEffect, useContext} from 'react'
import TopBar from '../TopBar/TopBar'
import SideBar from '../SideBar/SideBar'
import Footer from '../Footer/Footer'
import { useNavigate } from 'react-router-dom';
import UserEnquiry from './UserEnquiry';
import Card from '../Card/Card';
import Assets from './Assets';


const UserDashboard = () => {
    const [user, setUser] = useState({"email":"","password":""});
    const storedComp = localStorage.getItem('currentComponent');
    const [contentComponent, setContentComponent] = useState(null);
    const navigate = useNavigate();


  useEffect(() => {
    // Retrieve user details from localStorage
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
      // Parse the stringified user object
      setUser(JSON.parse(loggedInUser));
    }
    else{
        navigate('/'); 
    }
  }, []);
  
  useEffect(() => {
    console.log("i am called!!");
    switch (storedComp) {
      case "enquire":
        setContentComponent(<UserEnquiry/>);
        console.log("enquire is called");
        console.log(storedComp);
        break;
      case "maintenance":
        setContentComponent(<UserEnquiry/>);
        console.log("maintenance is called");
        console.log(storedComp);
        break;
      case "profile":
        setContentComponent(<UserEnquiry/>);
        console.log("profile is called");
        console.log(storedComp);
        break;
      case "request":
        setContentComponent(<UserEnquiry/>);
        console.log("request is called");
        console.log(storedComp);
        break;
      case "release":
        setContentComponent(<UserEnquiry/>);
        console.log("release is called");
        console.log(storedComp);
        break;
      case "assets":
      default:
        setContentComponent(<Assets/>);
        console.log("Card is called");
        console.log(storedComp);
        break;
    }
  }, [storedComp])

    return (

      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: 'none' }}>
        <TopBar userpg={true} />
      </div>
      <div style={{ flex: '1', display: 'flex' }}>
        <div style={{ flex: 'none' }}>
          <SideBar name={user.email} />
        </div>
        <div style={{ flex: '1' }}>
        {contentComponent}
        </div>
      </div>
      <div style={{ flex: 'none', paddingTop:"5%", minheight: '100px' }}>
        <Footer />
      </div>
    </div>
    )
}

export default UserDashboard
