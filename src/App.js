import './App.css';
import profileImage from './img/profile.png';
import sunrise_bg from './img/sunrise.jpeg';
import blackTowhite from './img/blacktowhite.png';

import{Parallax, ParallaxLayer} from '@react-spring/parallax';

function App() {
  return (
    <div className="App">
      <Parallax pages={5}>

        {/* background images */}
        <ParallaxLayer 
          offset={0}
          speed={1.2}
          factor={2}
          style={{
            backgroundImage: `url(${sunrise_bg})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer 
          offset={2}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${blackTowhite})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer 
          offset={0}
          speed={1}
          factor={2}
        />

        <ParallaxLayer offset={0}>
      
            <h1>Matteo Larrode</h1>
            <h1>Welcome to my website</h1>
            <h3>start scrolling!</h3>
            <img src={profileImage} alt="Profile" width="400" height= "auto" />

        </ParallaxLayer>
          
        <ParallaxLayer offset={1}>
            <h1>High School</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={2}>
          <h1>Undergrad: First Year</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={3}>
          <h1>Undergrad: Second Year</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={4}>
          <h1>Undergrad: Year Abroad</h1>
        </ParallaxLayer>
        
      </Parallax>
    </div>
  );
}

export default App;
