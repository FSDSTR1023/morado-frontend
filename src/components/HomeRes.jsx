// import React from 'react'

import NavBar from "./generalWeb/sectionsLanding/a_parts/NavBar.jsx"
// import Home from "./generalWeb/sectionsLanding/Home.jsx"
import Rooms from "./generalWeb/sectionsLanding/a_parts/Rooms.jsx"
// import Location from "./generalWeb/sectionsLanding/Location.jsx"
import ReviewGroup from "./generalWeb/sectionsLanding/a_parts/ReviewGroup.jsx"
import Faquestions from "./generalWeb/sectionsLanding/Faquestions.jsx"
import Footer from './generalWeb/sectionsLanding/a_parts/footer/Footer.jsx'
import BookForm from './generalWeb/sectionsLanding/a_parts/BookForm.jsx'
import HeroSlider from "./generalWeb/sectionsLanding/a_parts/HeroSlider.jsx"
import Hotel from "./generalWeb/sectionsLanding/Hotel.jsx"

const HomeRes = () => {
  return (
    <div>
      <NavBar />
      <div className="self-baseline" id="Home"><HeroSlider  /></div>

        <div className="container mx-auto relative">
          <div className="bg-accent/20 mt-4 p-4 lg:shadow-xl lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-12">
            <BookForm  />
          </div>
        </div>
        
      <section className="self-baseline" id="Hotel"><Hotel  /></section>
      <section className="self-baseline" id="Rooms"><Rooms  /></section>
      {/* <div className="self-baseline" id="Location"><Location  /></div> */}
      <section className="self-baseline" id="Review"><ReviewGroup  /></section>
      <section className="shadow-xl mb-10" id="Faquestions">
          <Faquestions  />
      </section>
      <Footer />
    </div>
  )
}

export default HomeRes