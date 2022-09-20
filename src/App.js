import profilePic from './img/profile.png'
import sunrise_bg from './img/sunrise.jpeg';
import smoke from './img/blacktowhite.png';
import downScrollArrow from './img/icons-down-button-50.png'
import white_bg from './img/white-bg5.jpg'

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
          speed={1.5}
          factor={4}
          style={{
            backgroundImage: `url(${sunrise_bg})`,
            backgroundSize: 'cover'
          }}
        />

        <ParallaxLayer 
          offset={1.99}
          speed={1.5}
          factor={5.2}
          style={{
            backgroundPositionY: 'center',
            backgroundImage: `url(${smoke})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer 
          offset={3.99}
          speed={2}
          factor={4}
          style={{
            backgroundPosition: 'center',
            backgroundImage: `url(${white_bg})`,
            backgroundSize: 'cover',
          }}
        />

        {/* sticky layers */}
        <ParallaxLayer
          sticky={{start: 1, end: 3.8}}
          style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
            <div className='sticky skillsCard'>
              <p>SKILLS</p>
            </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{start: 1., end: 3.8}}
          style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
            <div>
              <ul className='skillHS'>
                <li>Teamwork</li>
                <li>Time Management</li>
                <li>Leadership</li>
              </ul>
            </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{start: 1.9, end: 3.8}}
          style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
            <div>
              <ul className='skill1'>
                <li>Writing</li>
                <li>Communication</li>
                <li>Creative thinking</li>
              </ul>
            </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{start: 2.9, end: 3.8}}
          style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
            <div>
              <ul className='skill2'>
                <li>Independence</li>
                <li>Self-motivation</li>
              </ul>
            </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{start: 3.9, end: 3.9}}
          style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
            <div>
              <ul className='skill3'>
                <li>Problem solving</li>
                <li>Networking</li>
              </ul>
            </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{start: 2, end: 3.9}}
          style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
            <div className='sticky toolboxCard'>
              <p>TOOL BOX</p>
            </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{start: 2.1, end: 3.9}}
          style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
            <div>
              <ul className='tools1'>
                <li>Excel</li>
                <li>Word Processors</li>
              </ul>
            </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{start: 2.9, end: 3.9}}
          style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
            <div>
              <ul className='tools2'>
                <li>HTML/CSS/JavaScript</li>
                <li>RStudio</li>
                <li>Linear Regression</li>
              </ul>
            </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{start: 3.7, end: 3.9}}
          style={{display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
            <div>
              <ul className='tools3'>
                <li>NPL</li>
                <li>Machine Learning</li>
                <li>VS Code</li>
                <li>C</li>
                <li>Python</li>
                <li>SQL</li>
              </ul>
            </div>
        </ParallaxLayer>


        {/* timeline outline */}
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

        {/* timeline activities */}
        <ParallaxLayer 
          offset={1.2}
          speed={0.7}
          style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div className='activityCard'>
              <p>
                Youth for Climate
              </p>
            </div>
            <div className='activityCard'>
              <p>
                Sports
              </p>
            </div>
            <div className='activityCard'>
              <p>
                Young Ambassador UNICEF
              </p>
            </div>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={2.1}
          speed={0.7}
          style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div className='activityCard'>
              <p>
                Moving to London
              </p>
            </div>
            <div className='activityCard'>
              <p>
                First Year of University: <br/>
                birth of a passion
              </p>
            </div>
            <div className='activityCard'>
              <p>
                United Nations Association
              </p>
            </div>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={3}
          speed={0.7}
          style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div className='activityCardblack'>
              <p>
                Second Year of University: <br/>
                the confirmation
              </p>
            </div>
            <div className='activityCard'>
              <p>
                First Data Analysis projects
              </p>
            </div>
            <div className='activityCardblack'>
              <p>
                United Nations Association
              </p>
            </div>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={4}
          speed={0.7}
          style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div className='activityCard'>
              <p>
                Moving to Washington DC
              </p>
            </div>
            <div className='activityCardblack'>
              <p>
                CS50x
              </p>
            </div>
            <div className='activityCard'>
              <p>
                More projects
              </p>
            </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
