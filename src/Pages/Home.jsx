import React from 'react'
import Totop from '../assets/Images/arrowUp.png';
import Header from '../components/header.jsx';
import Hero from '../components/hero.jsx';
import Enroll from '../components/enroll.jsx';
import Courses from '../components/Courses.jsx';
import IT from '../components/IT_services.jsx';
import Sidebar from '../components/Sidebar.jsx';
import Clients from '../components/Clients.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Benefits from '../components/Benefits.jsx';
import Footer from '../components/Footer.jsx';
import Meet from '../components/Meet.jsx';
import Subscribe from '../components/Subscribe.jsx';

const Home = () => {
  return (
    <div className='Home'>
      <Header />
       <Sidebar />
      <Hero />
      <Enroll />
      <Courses />
      <IT />
      <Clients />
      <Testimonials />
      <Benefits />
      <Meet />
      <Subscribe />

<img draggable="false" src={Totop} className="toTop z-[9999] fixed bottom-12 right-6 rounded-full w-[2.4rem] cursor-pointer ring-2 p-0 shadow-md shadow-[#0000009f] ring-white duration-[.5s] hover:p-1 hover:opacity-100 opacity-25 hover:rotate-[360deg]" onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'})}} />
      <Footer />
    </div>
  )
}

export default Home