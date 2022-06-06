import React from 'react';
import { Link } from "react-router-dom";
import { MenuItems } from './MenuItems';
import './Navbar.css';
import logo from './Ekatra_Logo.png';
import profilePic from './blank-profile-picture-gd251ae629_640.png';
import { useState } from 'react';


const Navbar = () => {

  const [activeTab, setActiveTab] = useState(1);

  return (
        <div className='navbar'>
          <div className='navbarWrapper'>
            <div className='topLeft'>
                <img alt='logo' src={logo} className='logoImage'/>
            </div>
            <div className='topRight'>
            
                {MenuItems.map((item, index) => {
                    return (
                        
                          <div onClick={() => {setActiveTab(item.id)}} className={`navbarTab ${activeTab === item.id ? "active" : ""}`} key={item.id}>
                          <Link  to={item.url}>
                            {item.title}
                          </Link>
                          </div>
                        
                    )
                })}

                <div className='rectangle'></div>
                
                <Link to={"/profile"} style={{textDecoration: 'none'}}>
                  <div className='profileDiv'>
                  
                    <img alt='profile' src={profilePic} className='profileImage'/>
                    <div>
                      <p className='courseName'>Course Name</p>
                      <p className='educatorName'>Educator</p>
                    </div>
                    
                  </div>
                </Link>
            
            </div>
          </div>
        </div>
    )
}




export default Navbar;