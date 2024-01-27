// import React from 'react'

import NavBar from "./generalWeb/navBars/NavBar.jsx"
import Home from "./generalWeb/sectionsLanding/home/Home.jsx"
import Rooms from "./generalWeb/sectionsLanding/rooms/Rooms.jsx"
import Location from "./generalWeb/sectionsLanding/location/Location.jsx"
import Review from "./generalWeb/sectionsLanding/review/Review.jsx"
import Faquestions from "./generalWeb/sectionsLanding/faquestions/Faquestions.jsx"

const HomeRes = () => {
  return (
    <div>
      <NavBar />
      <div className="self-baseline" id="Home"><Home  /></div>
      <div className="self-baseline" id="Rooms"><Rooms  /></div>
      <div className="self-baseline" id="Location"><Location  /></div>
      <div className="self-baseline" id="Review"><Review  /></div>
      <div className="self-baseline" id="Faquestions"><Faquestions  /></div>
      
    </div>
  )
}

export default HomeRes