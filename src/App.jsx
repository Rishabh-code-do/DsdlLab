import "./App.css";
import Dashboard from './Components/Dashboard';
import FAQs from './Components/FAQs';
import Facility from './Components/Facility';
import FaculityMentors from './Components/FaculityMentors';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import "./Style/Navbar.css"
import Download from './Components/Download'



function App() {
  return (
    <div>
       <div className='nav'>
        <h1>DSDL<span className='lab'>LAB</span></h1>
         <div className='nav1'>
            <a href="#Dashboard">Dashboard</a>
            <a href="#Facility">Facility</a>
            <a href="#Mentors">Mentors</a>
            <a href="#faqs">FAQs</a>
            <Download/>
         </div>
         <div className='button'>
            <button className='Button1'>Sign In</button>
            <button className='Button2'>Sign Up</button>
         </div>
     </div>
       <a id="Dashboard"><Hero />
        <Dashboard /></a>
        <a id="Facility"><Facility /></a>
        <a id="Mentors"><FaculityMentors /></a>
        <a id="faqs"><FAQs /></a>
       <Footer />
    </div>    
  );
}

export default App;
