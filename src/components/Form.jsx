import React, { useState, createContext } from 'react'
import Cart from './Cart';

export const CartContext = createContext();

const Form = () => {
  const [name, setName] = useState(); 
  const [phoneNo, setPhoneNo] = useState(); 
  const [email, setEmail] = useState();
  const [arrivalDate, setArrivalDate] = useState();
  const [arrivalTime, setArrivalTime] = useState();
  const [airline, setAirline] = useState();
  const [airport, setAirport] = useState();
  const [departureTime, setDepartureTime] = useState();
  const [travelNumber, setTravelNumber] = useState(0);
  const [relativeName, setRelativeName] = useState();
  const [relativeNo, setRelativeNo] = useState();
  const [emergencyName, setEmergencyName] = useState();
  const [emergencyNo, setEmergencyNo] = useState();
  const [toHouseTransport, setToHouseTransport] = useState(true);
  const [toAirportTransport, setToAirportTransport] = useState(true);
  const [relativePicked, setRelativePicked] = useState(true);
  const [relativeDropped, setRelativeDropped] = useState(true);
  const [queenShirt, setQueenShirt] = useState("S");
  const [kingShirt, setKingShirt] = useState("L");
  const [shirtTitle, setShirtTitle] = useState("The Queen/King has Arrived");
  
  let [subtotal, setSubtotal] = useState(0);

  const handleCheck = (data) => {
    if(data === 'house') {
      if(toHouseTransport === true) {
        setSubtotal(subtotal += 50);
        setToHouseTransport(false);
      }
      if (toHouseTransport === false) {
        setSubtotal(subtotal -= 50);
        setToHouseTransport(true);
      }
    }

    if(data === 'airport') {
      if(toAirportTransport === true) {
        setSubtotal(subtotal += 50);
        setToAirportTransport(false);
      }
      if (toAirportTransport === false) {
        setSubtotal(subtotal -= 50);
        setToAirportTransport(true);
      }
    }

    if(data === 'picked') {
      if(relativePicked === true) {
        setSubtotal(subtotal += 50);
        setRelativePicked(false);
      }
      if (relativePicked === false) {
        setSubtotal(subtotal -= 50);
        setRelativePicked(true);
      }
    }
    if(data === 'dropped') {
      if(relativeDropped === true) {
        setSubtotal(subtotal += 50);
        setRelativeDropped(false);
      }
      if (relativeDropped === false) {
        setSubtotal(subtotal -= 50);
        setRelativeDropped(true);
      }
    }
  }

  const handleQueenShirtChange = (event) => {
    setQueenShirt(event.target.value)
  }

  const handleKingShirtChange = (event) => {
    setKingShirt(event.target.value)
  }

  const handleShirtTitleChange = (event) => {
    setShirtTitle(event.target.value)
  }

  return (
    <CartContext.Provider value={{subtotal}}>
      <Cart/>
      <form>
        <input type='text' placeholder='Name' value={name} onChange={e => setName(e.target.value)} required/>
        <input type='tel' placeholder='Phone#' value={phoneNo} onChange={e => setPhoneNo(e.target.value)} required/>
        <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required/>
        <br/>
        <label>Date of Arrival: </label><input type='date' value={arrivalDate} onChange={e => setArrivalDate(e.target.value)} required/>
        <br/>
        <label>Time of Arrival: </label><input type='time' value={arrivalTime} onChange={e => setArrivalTime(e.target.value)} required/>
        <br/>
        <input type='text' placeholder='Airline' value={airline} onChange={e => setAirline(e.target.value)} required/>
        <input type='text' placeholder='Arrival Airport' value={airport} onChange={e => setAirport(e.target.value)} required/>
        <br/>
        <label>Date of Departure: </label><input type='date' value={departureTime} onChange={e => setDepartureTime(e.target.value)} required/>
        <p>Are others traveling with you? </p>
        <label><input type='radio' name='others' value='no'/> No</label>
        <label><input type='radio' name='others' value='yes'/> Yes</label>
        <label>, How many? </label><input type='number' value={travelNumber} onChange={e => setTravelNumber(e.target.value)}/>
        <p>Your VOA includes Airport Arrival Escort. You will be assisted and escorted for the entire 
          process. Do you want to add Airport Escort for your Departure? 
        </p>
        <label><input type='radio' name='escort' value='yes'/> Yes, $75</label>
        <label><input type='radio' name='escort' value='no'/> No, thank you</label>
        <p>Will someone be in Nigeria to greet you at the airport? If yes, then please answer below.</p>
        <input type='text' placeholder='Relative Name' value={relativeName} onChange={e => setRelativeName(e.target.value)}/>
        <input type='tel' placeholder='Relative Phone#' value={relativeNo} onChange={e => setRelativeNo(e.target.value)}/>
        <p>Emergency Contact in Home Country:</p>
        <input type='text' placeholder='Name' value={emergencyName} onChange={e => setEmergencyName(e.target.value)}/>
        <input type='tel' placeholder='Phone#' value={emergencyNo} onChange={e => setEmergencyNo(e.target.value)}/>
        <hr/>
        <h3>Transportation</h3>
        <p>Please indicate if you will need transportation on the day of your Arrival and Departure. </p>
        <label><input type='checkbox' value={toHouseTransport} onChange={e => handleCheck('house')}/> 
          I will need transportation from the airport to my housing accommodations on the day of my Arrival. ($50) 
        </label>
        <br/>
        <label><input type='checkbox' value={toAirportTransport} onChange={e => handleCheck('airport')}/> 
          I will need transportation from my housing accommodation to the airport of the day of my Departure. ($50) 
        </label>
        <br/>
        <label><input type='checkbox' value={relativePicked} onChange={e => handleCheck('picked')}/> 
          For my arrival, I will need transportation for my Relative to be picked up and brought to the airport to greet me, 
          and then take us both to our accommodation from the airport ($100) 
        </label>
        <br/>
        <label><input type='checkbox' value={relativeDropped} onChange={e => handleCheck('dropped')}/> 
          I will also need this for my Departure, to have my My Relative dropped off, after seeing me off and leaving the 
          airport. ($100).
        </label>
        <p>Would you like to have a security officer to escort you during your stay?</p>
        <label><input type='radio' name='security' value='no'/> No</label>
        <label><input type='radio' name='security' value='yes'/> Yes</label>
        <div className='Security-Officer'>
          <label><input type='radio' name='security' value='private officer'/> Private Officer $40 daily</label>
          <label><input type='radio' name='security' value='police officer'/> Police Officer $60</label>
          <label><input type='checkbox'/> Visibly Armed $75 daily surcharge (in addition to above Officer Charge)</label>
        </div>
        <hr/>
        <h3>T-Shirts</h3>
        <label>Queen Tshirt $25: </label>
        <select value={queenShirt} onChange={handleQueenShirtChange}>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="X">X</option>
          <option value="L">L</option>
          <option value="1X">1X</option>
          <option value="2X">2X</option>
        </select>
        <br/>
        <label>Matching King T-Shirt $25: </label>
        <select value={kingShirt} onChange={handleKingShirtChange}>
          <option value="M">M</option>
          <option value="X">X</option>
          <option value="L">L</option>
          <option value="1X">1X</option>
          <option value="2X">2X</option>
        </select>
        <br/>
        <label>Choose Title: </label>
        <select value={shirtTitle} onChange={handleShirtTitleChange}>
          <option value="The Queen/King has Arrived">The Queen/King has Arrived</option>
          <option value="Breaking The Spell">Breaking The Spell</option>
          <option value="It’s In My DNA">It’s In My DNA</option>
        </select>
        <br/>
        <button type='submit'>Submit</button>
      </form>
    </CartContext.Provider>
  )
}

export default Form