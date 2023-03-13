import React, { useState, createContext } from 'react'
import Cart from './Cart';

export const CartContext = createContext();

const Form = () => {
  const [toHouseTransport, setToHouseTransport] = useState(true);
  const [toAirportTransport, setToAirportTransport] = useState(true);
  const [relativePicked, setRelativePicked] = useState(true);
  const [relativeDropped, setRelativeDropped] = useState(true);
  const [shouldHide, setShouldHide] = useState(true);
  const [securityHide, setSecurityHide] = useState(true);
  const [armedOfficer, setArmedOfficer] = useState(true);
  
  let [queen, setQueen] = useState(0);
  let [king, setKing] = useState(0);

  let queenShirt;
  let kingShirt;
  let shirtTitle;

  let [transportation, setTransportation] = useState(0); 
  let [tshirts, setTshirts] = useState(0);
  let [departureEscort, setDepartureEscort] = useState(0);
  let [officer, setOfficer] = useState(0);
  let [armed, setArmed] = useState(0);

  const handleCheck = (data) => {
    if(data === 'house') {
      if(toHouseTransport === true) {
        setTransportation(transportation += 50);
        setToHouseTransport(false);
      }
      if (toHouseTransport === false) {
        setTransportation(transportation -= 50);
        setToHouseTransport(true);
      }
    }
    if(data === 'airport') {
      if(toAirportTransport === true) {
        setTransportation(transportation += 50);
        setToAirportTransport(false);
      }
      if (toAirportTransport === false) {
        setTransportation(transportation -= 50);
        setToAirportTransport(true);
      }
    }
    if(data === 'picked') {
      if(relativePicked === true) {
        setTransportation(transportation += 50);
        setRelativePicked(false);
      }
      if (relativePicked === false) {
        setTransportation(transportation -= 50);
        setRelativePicked(true);
      }
    }
    if(data === 'dropped') {
      if(relativeDropped === true) {
        setTransportation(transportation += 50);
        setRelativeDropped(false);
      }
      if (relativeDropped === false) {
        setTransportation(transportation -= 50);
        setRelativeDropped(true);
      }
    }
    if(data === 'armed') {
      if(armedOfficer === true) {
        setArmed(armed += 75);
        setArmedOfficer(false);
      }
      if (armedOfficer === false) {
        setArmed(armed -= 75);
        setArmedOfficer(true);
      }
    }
  }

  const escortRadioButton = (data) => {
    if(data === 'yes') {
      setDepartureEscort(departureEscort += 75);
    }
    if(data === 'no') {
      if(departureEscort === 75) {
        setDepartureEscort(departureEscort -= 75);
      }
    }
  }

  const relativeRadioButton = (data) => {
    if(data === 'yes') {
      if(shouldHide === true) {
        setShouldHide(false);
      }
    }
    if(data === 'no') {
      if(shouldHide === false) {
        setShouldHide(true);
      }
    }
  }

  const securityRadioButton = (data) => {
    if(data === 'yes') {
      if(securityHide === true) {
        setSecurityHide(false);
      }
    }
    if(data === 'no') {
      if(securityHide === false) {
        setSecurityHide(true);
      }
    }
  }

  const officerRadioButton = (data) => {
    if(data === 'private') {
      if(officer === 0) {
        setOfficer(officer += 40);
      }
      if(officer === 60) {
        setOfficer(officer -= 60);
        setOfficer(officer += 40);
      }
    }
    if(data === 'police') {
      if(officer === 0) {
        setOfficer(officer += 60);
      }
      if(officer === 40) {
        setOfficer(officer -= 40);
        setOfficer(officer += 60);
      }
        
    }
  }

  const handleQueenShirtChange = (event) => {
    queenShirt = event.target.value;
    if(queenShirt) {
      if(queen === 0) {
        setTshirts(tshirts += 25);
        setQueen(queen += 25);
      }
    }
    if(!queenShirt) {
      if(queen === 25) {
        setTshirts(tshirts -= 25);
        setQueen(queen -= 25);
      }
    }
  }

  const handleKingShirtChange = (event) => {
    kingShirt = event.target.value;
    if(kingShirt) {
      if(king === 0) {
        setTshirts(tshirts += 25);
        setKing(king += 25);
      }
    }
    if(!kingShirt) {
      if(king === 25) {
        setTshirts(tshirts -= 25);
        setKing(king -= 25);
      }
    }
  }

  const handleShirtTitleChange = (event) => {
    shirtTitle = event.target.value;
  }

  return (
    <CartContext.Provider value={{departureEscort, transportation, officer, armed, tshirts}}>
      <div className='container'>
        <div className="row">
          <div className="col-12">
            <form className='row g-3 shadow p-3 mb-5 bg-body-tertiary rounded'>
              <p>In order to process your application to receive your Fast Track Visa On Arrival (VOA), we need 
                the following information.
              </p>
              <div className="col-md-3">
                <label className='form-label'>Name: </label>
                <input type='text' className='form-control' required/>
              </div>
              <div className="col-md-3">
                <label className='form-label'>Phone Number: </label>
                <input type='tel' className='form-control' required/>
              </div>
              <div className="col-md-3">  
                <label className='form-label'>Email: </label>
                <input type='email' className='form-control' required/>
              </div>
              <div className='col-md-3'>
                <label className='form-label'>Date of Arrival: </label>
                <input type='date' className='form-control' required/>
              </div>

              <div className="col-md-3">
                <label className='form-label'>Time of Arrival: </label>
                <input type='time' className='form-control' required/>
              </div>
              <div className="col-md-3">
                <label className='form-label'>Airline: </label>
                <input type='text' className='form-control' required/>
              </div>
              <div className='col-md-3'>
                <label className='form-label'>Arrival Airport: </label>
                <input type='text' className='form-control' required/>
              </div>
              <div className='col-md-3'>
                <label className='form-label'>Date of Departure: </label>
                <input type='date' className='form-control' required/>
              </div>
              
              <div className='col-md-3'>
                <label className='form-label'>Are others traveling with you? </label>
                <div className="form-check form-check-inline">
                  <input 
                    type='radio' className="form-check-input" name='others' value='no'
                    onClick={e => relativeRadioButton('no')}
                  />
                  <label className='form-check-label'>No</label>
                </div>
                <div className="form-check form-check-inline">
                  <input 
                    type='radio' className="form-check-input" name='others' value='yes' 
                    onClick={e => relativeRadioButton('yes')}
                  />
                  <label className='form-check-label'>Yes</label>
                </div>
                <div className={shouldHide? 'hidden': undefined}>
                  <label className='form-label'>How many? </label>
                  <input type='number' className='form-control'/>
                </div>
              </div>
              
              <div className='col-md-12'>
                <label className='form-label'>Your VOA includes Airport Arrival Escort. You will be assisted and escorted for the entire 
                  process. Do you want to add Airport Escort for your Departure? 
                </label>
                <div className="form-check form-check-inline">
                  <input 
                    type='radio' className="form-check-input" name='escort' value='yes' 
                    onChange={e => escortRadioButton('yes')}
                  />
                  <label className='form-check-label'>Yes, $75</label>
                </div>
                <div className="form-check form-check-inline">
                  <input 
                    type='radio' className="form-check-input" name='escort' value='no'
                    onChange={e => escortRadioButton('no')}
                  />
                  <label className='form-check-label'>No, thank you</label>
                </div>
              </div>

              <div className='col-md-12'>
                <label className='form-label'>Will someone be in Nigeria to greet you at the airport? If yes, 
                  then please answer below:
                </label>
              </div>
              <div className='col-md-3'>
                <label className='form-label'>Relative Name: </label>
                <input type='text' placeholder='Relative Name' className='form-control'/>
              </div>
              <div className='col-md-3'>
                <label className='form-label'>Relative Phone Number: </label>
                <input type='tel' className='form-control'/>
              </div>

              <div className='col-md-12'>
                <label>Emergency Contact in Home Country</label>
              </div>
              <div className='col-md-4'>
                <label className='form-label'>Name: </label> 
                <input type='text' placeholder='Name' className='form-control'/>
              </div>
              <div className='col-md-4'>
                <label className='form-label'>Phone Number: </label>
                <input type='tel' placeholder='Phone Number' className='form-control'/>
              </div>

              <hr/>
              <h4>TRANSPORTATION</h4>
              <div className='col-md-12'>
                <label className='form-label'>Please indicate if you will need transportation on the day of your 
                  Arrival and Departure.
                </label>  
              </div>
              <div className='col-md-12 form-check'>
                <input 
                  type='checkbox' value={toHouseTransport} onChange={e => handleCheck('house')}
                  className='form-check-input'
                />
                <label className='form-check-label'>I will need transportation from the airport to my housing 
                  accommodations on the day of my Arrival. ($50) 
                </label>
              </div>
              <div className='col-md-12 form-check'>
                <input 
                  type='checkbox' value={toAirportTransport} onChange={e => handleCheck('airport')}
                  className='form-check-input'
                />
                <label className='form-check-label'>I will need transportation from my housing accommodation to the 
                  airport of the day of my Departure. ($50) 
                </label>
              </div>
              <div className='col-md-12 form-check'>
                <input 
                  type='checkbox' value={relativePicked} onChange={e => handleCheck('picked')}
                  className='form-check-input'
                />
                <label className='form-check-label'>For my arrival, I will need transportation for my Relative to be 
                  picked up and brought to the airport to greet me, and then take us both to our accommodation from 
                  the airport ($100) 
                </label>
              </div>
              <div className='col-md-12 form-check'>
                <input 
                  type='checkbox' value={relativeDropped} onChange={e => handleCheck('dropped')}
                  className='form-check-input'
                />
                <label className='form-check-label'>I will also need this for my Departure, to have my My Relative 
                  dropped off, after seeing me off and leaving the 
                  airport. ($100).
                </label>
              </div>

              <div className='col-md-6'>
                <label className='form-label'>Would you like to have a security officer to escort you during your stay?</label>
              </div>
              <div className='col-md-4'>
                <div className="form-check form-check-inline">
                  <input 
                    type='radio' name='security' value='no' className="form-check-input"
                    onClick={e => securityRadioButton('no')}
                  />
                  <label className='form-check-label'>No</label>
                </div>
                <div className="form-check form-check-inline">
                  <input 
                    type='radio' name='security' value='yes' className="form-check-input"
                    onClick={e => securityRadioButton('yes')}
                  />
                  <label className='form-check-label'>Yes</label>
                </div>
              </div>
              
              <div className={securityHide? 'hidden': undefined}>
                <div className="form-check form-check-inline">
                  <input 
                    type='radio' name='security' value='private officer' className="form-check-input"
                    onChange={e => officerRadioButton('private')}
                  />
                  <label className='form-check-label'>Private Officer $40 daily</label>
                </div>
                <div className="form-check form-check-inline">
                  <input 
                    type='radio' name='security' value='police officer' className="form-check-input"
                    onChange={e => officerRadioButton('police')}
                  />
                  <label className='form-check-label'>Police Officer $60</label>
                </div>
                <div className='form-check'>
                  <input 
                    type='checkbox' className="form-check-input" value={armedOfficer} 
                    onChange={e => handleCheck('armed')}
                  />
                  <label className='form-check-label'>Visibly Armed $75 daily surcharge (in addition to above Officer 
                    Charge)
                  </label>
                </div>
              </div>

              <hr/>          
              <h4>T-SHIRTS</h4>
              <div className='col-md-3'>
                <label className='form-label'>Queen Tshirt $25: </label>
                <select value={queenShirt} onChange={handleQueenShirtChange} className='form-select form-select-md mb-3'>
                  <option value="">Select Shirt Size</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                  <option value="X">X</option>
                  <option value="L">L</option>
                  <option value="1X">1X</option>
                  <option value="2X">2X</option>
                </select>
              </div>
              <div className='col-md-3'>
                <label className='form-label'>Matching King T-Shirt $25: </label>
                <select value={kingShirt} onChange={handleKingShirtChange} className='form-select form-select-md mb-3'>
                  <option value="">Select Shirt Size</option>
                  <option value="M">M</option>
                  <option value="X">X</option>
                  <option value="L">L</option>
                  <option value="1X">1X</option>
                  <option value="2X">2X</option>
                </select>
              </div>
              <div className='col-md-3'>
                <label className='form-label'>Choose Title: </label>
                <select value={shirtTitle} onChange={handleShirtTitleChange} className='form-select form-select-md mb-3'>
                  <option value="">Select Shirt Title</option>
                  <option value="The Queen/King has Arrived">The Queen/King has Arrived</option>
                  <option value="Breaking The Spell">Breaking The Spell</option>
                  <option value="It’s In My DNA">It’s In My DNA</option>
                </select>
              </div>
              <hr/>
              <div className='col-md-4'>
                <button type='submit' className='btn btn-dark'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Cart/>
    </CartContext.Provider>
  )
}

export default Form;