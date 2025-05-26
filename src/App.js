import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/skillsDir/skills';
import Portfolio from './components/projectsDir/portfolio';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Hero/>
      <AboutMe/>
      <Skills/>
      <Portfolio/>
    </div>
  );
}

export default App;
