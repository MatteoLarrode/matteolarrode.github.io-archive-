import profilePic from './img/profile.png'
import sunrise_bg from './img/sunrise.jpeg'
import smoke from './img/blacktowhite.png'
import downScrollArrow from './img/icons-down-button-50.png'
import white_bg from './img/white-bg5.jpg'
import proj_forecast from './img/proj_forecast.png'
import proj_map from './img/proj_map.png'
import proj_text from './img/proj_text.png'
import essay_IR from './img/essay_IR.png'
import london_move from './img/london_move.png'
import limun from './img/limun.png'
import washington from './img/washington.png'
import yfc_rennes from './img/yfc_rennes.png'

import Navbar from "./components/Navbar";
import './styles/styles.css';

import{Parallax, ParallaxLayer} from '@react-spring/parallax';
import {useRef} from 'react';

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

        {/* timeline activities */}
        <ParallaxLayer 
          offset={1.2}
          speed={0.7}
          style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div className='activityCardwhite'>
              <img 
                src={yfc_rennes} 
                alt="YFC" 
                width="75%" 
                height= "auto"
                style={{padding:'1rem'}} />
              <p className='caption'>
                Youth for Climate Initiative
              </p>
            </div>
            <div className='activityCardwhite'>
              <p>
                Sports
              </p>
            </div>
            <div className='activityCardwhite'>
              <p>
                Young Ambassador UNICEF
              </p>
            </div>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={2.4}
          speed={0.7}
          style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <div className='activityCardwhite'>
            <img 
                src={london_move} 
                alt="London Move" 
                width="60%" 
                height= "auto"
                style={{padding:'1rem'}} />
              <p className='caption'>
                A new country
              </p>
            </div>
            <div className='activityCardwhite'>
              <img 
                src={essay_IR} 
                alt="IR Essay" 
                width="75%" 
                height= "auto"
                style={{padding:'1rem'}}/>
              <p className='caption'>
                International Relations Essay
              </p>
            </div>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={3.3}
          speed={0.7}
          style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <div className='activityCardwhite'>
              <img 
                src={proj_map} 
                alt="Project Map" 
                width="75%" 
                height= "auto"
                style={{padding:'1rem'}}/>
              <p className='caption'>
                Spatial Data Analysis
              </p>
            </div>
            <div className='activityCardblack'>
            <img 
                src={limun} 
                alt="LIMUN 2022" 
                width="77%" 
                height= "auto"
                style={{padding:'1rem'}}/>
              <p className='caption'>
                London International MUN
              </p>
            </div>
            <div className='activityCardwhite'>
              <img 
                src={proj_text} 
                alt="Project Text" 
                width="75%" 
                height= "auto"
                style={{padding:'1rem'}} />
              <p className='caption'>
                Text Data Analysis
              </p>
            </div>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={4.3}
          speed={0.7}
          style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <div className='activityCardwhite'>
              <img 
                src={washington} 
                alt="London Move" 
                width="75%" 
                height= "auto"
                style={{padding:'1rem'}} />
              <p className='caption'>
                A new continent
              </p>
            </div>
            <div className='activityCardwhite'>
              <img 
                src={proj_forecast} 
                alt="Project Forecast" 
                width="75%" 
                height= "auto"
                style={{padding:'1rem'}} />
              <p className='caption'>
                Prediction of exchange rates using APIs and machine learning in Python
              </p>
            </div>
        </ParallaxLayer>


        {/* timeline outline */}
        <ParallaxLayer 
          offset={0}
          onClick={() => ref.current.scrollTo(1)}
          className="home-page">
            <div className='home-title'>
              <div className='page-title-white'> Welcome! </div>
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
            <div className="main-page">
              <div className = 'main-text-white'>
                Studying International Literature and American History to become proficient in English, 
                I was opening my eyes to the opportunities that being international has to offer. 
                I was also developing a passion for essay writing and academia.
              </div>
              <div className = 'main-text-white'>
                I didn’t know about data analysis and wasn’t particularly interested in coding at the time, 
                but juggling between my football trainings, classes, and other passions taught me time management.
              </div>
            </div>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={2}
          onClick={() => ref.current.scrollTo(3)}>
            <div className='page-title-white'>Undergrad: First Year</div>
            <div className='main-page'>
              <div className='main-text-white'>
                Moving to London on my 18th birthday was the most thrilling experience of my life, 
                it not only made me independent, but most of all triggered my desire to move around the world.
              </div>
              <div className='main-text-white'>
                Studying Politics, Philosophy and Economics, I refined my research methods, writing skills, 
                but most importantly creative thinking to produce unique essays that I’m proud of. 
              </div>
            </div>
            <div className='main-page'>
              <div className='main-text-black'>
                I discover RStudio through my Quantitative Research module. I immediately feel the unlimited potential of using data analysis as part of 
                my research. Finally a way to test the many theories we talk about in my political science classes, or to measure the impact of the macroeconomic policies
                studied in my seminars.  
              </div>
            </div>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={3}
          onClick={() => ref.current.scrollTo(4)}>
            <div className='page-title-black'> Undergrad: Second Year </div>
            <div className='main-page'>
                <div className='main-text-white'>
                  Data Analysis quickly become my favourite module by far. I become proficient in linear regressions, and apply models to more and more types of data: texts, spatial data
                  grab my attention. My curiosity around data analysis starts to outgrow the boundaries of my curricular activities and I start taking an online computer 
                  science class, cs50x by Harvard. I am introduced to other languages: C, Python, Sequel, HTML/CSS/JavaScript. 
                </div>

                <div className='main-text-black'>
                  I get involved into more extracurricular activities. My favourite area of political science being international relations and organizations, 
                  I participate to activities organized by the UCL United Nations Associations. Starting as a negociation facilitator at a COP21 simulation, I work
                  my way to represent France at the LIMUN 2022 conference in the NATO Committee. 
                </div>
            </div>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={4}
          onClick={() => ref.current.scrollTo(0)}>
            <div className='page-title-black'> Undergrad: Year Abroad </div>
            <div className='main-page'>
              <div className='main-text-black'>
                All those skills acquired along the way made me the aspiring data analyst that I am. My research methods developed studying politics now helps me to find the latest libraries and explore their documentation. 
                All the efforts I put to come up with unique and new ideas in my essay shaped my creative thinking, allowing me to think outside of the box and come up with a solution for every problem that I face.
              </div>
              <div className='main-text-white'>
                My various involvement in United Nations Associations and activities boosted my confidence and my ability to speak and share my ideas.
                My continuous practice of football (for now more than 10 years) gave me a sense of responsibility and commitment towards a common objective, and most importantly made me realize the immense value of teamwork.
              </div>
            </div>
            <div className='main-page'>
              <div className='main-text-black'>
                Most importantly, my choices to move abroad twice on my own made me more independent, self-motivated, 
                perseverant and determined to move forward no matter the difficulties that I face. 
              </div>
            </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
