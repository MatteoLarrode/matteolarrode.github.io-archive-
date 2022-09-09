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
          offset={1.6}
          speed={1}
          factor={2}
          style={{
            backgroundImage: `url(${blackTowhite})`,
            backgroundSize: 'cover',
          }}
        />

        <ParallaxLayer 
          offset={2.5}
          speed={1}
          factor={2}
          style={{
            backgroundColor: 'white'
          }}
        />

        {/* sticky layers */}
        <ParallaxLayer 
          sticky={{ start: 1.5, end: 5}} 
          speed={-0.5}
          className = 'skillBox'>
          <h3>Skills</h3>
        </ParallaxLayer>

        <ParallaxLayer 
          sticky={{ start: 2.5, end: 5}} 
          speed={-0.5}
          className = 'toolBox'>
          <h3>Tool Box</h3>
        </ParallaxLayer>

        <ParallaxLayer 
          offset={2.5}
          speed={1}
          factor={1.5}
          style={{
            backgroundColor: 'white'
          }}
        />



        {/* timeline */}
        <ParallaxLayer offset={0}>
            <h1>Matteo Larrode</h1>
            <h1>Welcome to my website</h1>
            <h2>start scrolling!</h2>
            <img src={profileImage} alt="Profile" width="300" height= "auto" />
        </ParallaxLayer>
          
        <ParallaxLayer offset={1}>
            <h1>High School</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={2}>
          <h1>Undergrad: First Year</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={3} style={{backgroundColor:'white'}}>
          <h1 className='blackHeader'> Undergrad: Second Year</h1>
        </ParallaxLayer>

        <ParallaxLayer offset={4} style={{backgroundColor:'white'}}>
          <h1 className='blackHeader'> Undergrad: Year Abroad</h1>
        </ParallaxLayer>
        
      </Parallax>
    </div>
  );
}

export default App;
