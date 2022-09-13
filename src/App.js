import profilePic from './img/profile.png'
import sunrise_bg from './img/sunrise.jpeg';
import smoke from './img/blacktowhite.png';
import downScrollArrow from './img/icons-down-button-50.png'

import Navbar from "./components/Navbar";
import './styles/styles.css';

import{Parallax, ParallaxLayer} from '@react-spring/parallax';
import { useRef } from 'react';

function App() {
  const ref = useRef();

  return (
    <div className="App">
      <Navbar/>

      <Parallax ref={ref} pages={5}>
        
        {/* background images */}
        <ParallaxLayer 
          offset={0}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${sunrise_bg})`,
            backgroundSize: 'cover'
          }}
        />

        <ParallaxLayer 
          offset={1}
          speed={1}
          factor={2}
          style={{
            backgroundColor: 'black'
          }}
        />

        <ParallaxLayer 
          offset={1.9}
          speed={1.5}
          factor={5.2}
          style={{
            backgroundImage: `url(${smoke})`,
            backgroundSize: 'cover',
          }}
        />
 

        {/* sticky layers */}
        <ParallaxLayer
          sticky={{start: 1, end: 4.3}}
          style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
            <div className='sticky skillsCard'>
              <p>SKILLS</p>
            </div>
        </ParallaxLayer>


        <ParallaxLayer
          sticky={{start: 2, end: 4.5}}
          style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
            <div className='sticky toolboxCard'>
              <p>TOOL BOX</p>
            </div>
        </ParallaxLayer>



        {/* timeline */}
        <ParallaxLayer 
          offset={0}
          onClick={() => ref.current.scrollTo(1)}
          className="home-page">
            <div className='home-title'>
              <div className='page-title-white'> Welcome to my website! </div>
            </div>

            <div className='home-card'>
              <img 
                src={profilePic} 
                alt="Profile" 
                width="175px" 
                height= "auto"
                style={{padding:'1rem'}} />
              <div className='home-name'>
                <p>I am</p>
                <p>MATTEO</p>
                <p>LARRODE</p>
              </div>
            </div>

            <div className='home-role'>
              Student | Aspiring Data Analyst and Social Researcher
            </div>

            <div className='home-arrow'>
              Click or scroll to discover more about my data science journey
            </div>
            <img src={downScrollArrow} alt="Scroll Down Arrow" width="30"/>
        </ParallaxLayer>
          
        <ParallaxLayer 
          offset={1}
          onClick={() => ref.current.scrollTo(2)}>
            <div className='page-title-white'>High School</div>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={2}
          onClick={() => ref.current.scrollTo(3)}>
            <div className='page-title-white'>Undergrad: First Year</div>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={3}
          onClick={() => ref.current.scrollTo(4)}>
            <div className='page-title-black'> Undergrad: Second Year </div>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={4}
          onClick={() => ref.current.scrollTo(0)}>
            <div className='page-title-black'> Undergrad: Year Abroad </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
