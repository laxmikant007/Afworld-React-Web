import React from 'react'
import { useState } from 'react';
import "../assets/css/offers.css";


export default function Offers() {

    const [statusVisible, setstatusVisible] = useState(false);
    const [tagVisible, setTagVisible] = useState(false);
    const [teammateVisible, setTeammateVisible] = useState(false);
    const [countryVisible, setCountryVisible] = useState(false);
    const [categoryVisible, setCategoryVisible] = useState(false);
    const [goalVisible, setGoalVisible] = useState(false);
  
    const toggleStatus = () => {
      setstatusVisible(!statusVisible);
    };

  
    const toggleTag = () => {
      setTagVisible(!tagVisible);
    };
    
    const toggleTeammate = () => {
        setTeammateVisible(!teammateVisible);
      };
    const toggleCountry = () => {
      setCountryVisible(!countryVisible);
    };


      const toggleCategory = () => {
        setCategoryVisible(!categoryVisible);
      };

      const toggleGoal = () => {
        setGoalVisible(!goalVisible);
      };
    
  
  return (
    <div className="offers">

            <h1 className='top-name-advertiser'>Offers</h1>
            <div className="advertisers-top">
                <a href="#">All Offers</a>
                <a href="#">Featured Offers</a>
                <a href="#">Offers Requests</a>
                <a href="#">Smart Links</a>
                <button className="add-advertiser-btn"> + Add Offers</button>
            </div>

            <div className="advertisers-lower">
                <div className="search-container">
                    <input type="text" placeholder="Search"></input>
                </div>
                    <div className="main-container">
                    <div className="list-item">
                    <div className="item-header" onClick={toggleStatus}>
                Status
                </div>
                    {statusVisible && (
                    <div className="sub-list">
                    <div>Status</div>
                    <div>Active</div>
                    <div>Pending</div>
                    <div>Inactive</div>
                    </div>
                    )}
                </div>
                <div className="list-item">
              <div className="item-header" onClick={toggleTag}>
                    Availability
                </div>
                    {tagVisible && (
                        <div className="sub-list">
                    <input type="text" placeholder="Search"></input>
                    </div>
                    )}
                </div>
                 <div className="list-item">
                     <div className="item-header" onClick={toggleTeammate}>
                      Advertisers
                    </div>
                    {teammateVisible && (
                    <div className="sub-list">
                    <input type="text" placeholder="Search"></input>
                    </div>
                    )}
                
                </div>

                <div className="list-item">
                     <div className="item-header" onClick={toggleCountry}>
                    Country
                    </div>
                    {countryVisible && (
                    <div className="sub-list">
                    <input type="text" placeholder="Search"></input>
                    </div>
                    )}
                
                </div>

                 <div className="list-item">
                     <div className="item-header" onClick={toggleCategory}>
                     Category
                    </div>
                    {categoryVisible && (
                    <div className="sub-list">
                    <input type="text" placeholder="Search"></input>
                    </div>
                    )}
                
                </div>

                 <div className="list-item">
                     <div className="item-header" onClick={toggleGoal}>
                     Goal Type
                    </div>
                    {goalVisible && (
                    <div className="sub-list">
                    <input type="text" placeholder="Search"></input>
                    </div>
                    )}
                
                </div>    



            </div>

            
                        



    </div>

        <div className="advertisers-body">

            <div className="advertisers-body-container">
            <button className="advertisers-body-button">Status</button>
            <button className="advertisers-body-button">Availability</button>
            <div className="advertisers-body-item">Payout</div>
            <div className="advertisers-body-item">Categories</div>
            <div className="advertisers-body-item">Targeting</div>
            <div className="advertisers-body-item">Performance</div>
            <div className="advertisers-body-item">Conversions</div>
            </div>

        </div>



    </div> 



)}
