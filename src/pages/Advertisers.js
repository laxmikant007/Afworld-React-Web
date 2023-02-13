import React from 'react'
import "../assets/css/advertisers.css";
import { useState } from 'react';


export default function Advertisers() {
    const [pendingVisible, setPendingVisible] = useState(false);
  const [countryVisible, setCountryVisible] = useState(false);
  const [tagVisible, setTagVisible] = useState(false);
  const [teammateVisible, setTeammateVisible] = useState(false);

  const togglePending = () => {
    setPendingVisible(!pendingVisible);
  };

  const toggleCountry = () => {
    setCountryVisible(!countryVisible);
  };

  const toggleTag = () => {
    setTagVisible(!tagVisible);
  };

  const toggleTeammate = () => {
    setTeammateVisible(!teammateVisible);
  };




  return (
    <div className="advertisers">
        <h1 className='top-name-advertiser'>Advertisers</h1>
        <div className="advertisers-top">
            <a href="#">All Advertisers</a>
            <a href="#">My Advertisers</a>
            <a href="#">Pending Advertisers</a>
            <button className="add-advertiser-btn"> + Add Advertiser</button>
        </div>


     <div className="advertisers-lower">
  
        <div className="main-container">
            <div className="list-item">
            <div className="item-header" onClick={togglePending}>
             Pending
            </div>
            {pendingVisible && (
          <div className="sub-list">
            <div>Status</div>
            <div>Active</div>
            <div>Pending</div>
            <div>Inactive</div>
          </div>
        )}
        </div>
            <div className="list-item">
        <div className="item-header" onClick={toggleCountry}>
          Country
        </div>
        {countryVisible && (
          <div className="sub-list">
            <div>India</div>
            <div>USA</div>
          </div>
        )}
      </div>
      <div className="list-item">
        <div className="item-header" onClick={toggleTag}>
          Tag
        </div>
        {tagVisible && (
          <div className="sub-list">
            <input type="text" placeholder="Search"></input>
          </div>
        )}
      </div>
      <div className="list-item">
        <div className="item-header" onClick={toggleTeammate}>
          Teammate
        </div>
        {teammateVisible && (
          <div className="sub-list">
            <input type="text" placeholder="Search"></input>
          </div>
        )}
        </div>
   
        </div>
     </div>

     <div className="advertisers-body">
            <div className="advertisers-body-container">
            <button className="advertisers-body-button">Advertiser</button>
            <div className="advertisers-body-item">Contacts</div>
            <div className="advertisers-body-item">Tags</div>
            <div className="advertisers-body-item">Teammates</div>
            <div className="advertisers-body-item">Registration</div>
            <div className="advertisers-body-item">Conversions</div>
         </div>

     </div>


    
    </div>

    

    
    





  )
}









