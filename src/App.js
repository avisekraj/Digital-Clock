import { useState } from 'react';
// import { motion } from "framer-motion";
import './App.css';
import ParticlesComponent from './Components/Particles';
function App() {
  let time = new Date().toLocaleTimeString();
  const [cTime, newTime] = useState(time);
  const updateTime = () => {
    time = new Date().toLocaleTimeString();
    newTime(time);
  }
  setInterval(updateTime, 1000);
  return (
    <>
      <ParticlesComponent style={{zIndex:'-1'}} id="tsparticles"/>
        <h1>{cTime}</h1>
      
    </>

  );
}

export default App;