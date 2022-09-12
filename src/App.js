import profileImage from './img/profile.png';
import sunrise_bg from './img/sunrise.jpeg';
import smoke from './img/blacktowhite.png';

import Navbar from "./components/Navbar";
import './styles/styles.css';

import{Parallax, ParallaxLayer} from '@react-spring/parallax';
import { useRef } from 'react';

function App() {
  const ref = useRef();

  return (
    <div className="App">
      <Navbar />

      <Parallax ref={ref} pages={6}>
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
          >
            <h1>Matteo Larrode</h1>
            <h1>Welcome to my website</h1>
            <h2>start scrolling!</h2>
            <img src={profileImage} alt="Profile" width="300" height= "auto" />
        </ParallaxLayer>
          
        <ParallaxLayer 
          offset={1}
          onClick={() => ref.current.scrollTo(2)}
          >
            <h1>High School</h1>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={2}
          onClick={() => ref.current.scrollTo(3)}>
            <h1>Undergrad: First Year</h1>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={3}
          onClick={() => ref.current.scrollTo(4)}
          >
            <h1 className='blackHeader'> Undergrad: Second Year</h1>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={4}
          onClick={() => ref.current.scrollTo(0)}
          >
            <h1 className='blackHeader'> Undergrad: Year Abroad</h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
