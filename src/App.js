import React, { useEffect, useState, useRef } from "react";
import './new.css';
import MainPage from "./components/newApp/MainPage";
import CLOUDS from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'
import data from'./db.json'
import yinyang from './assets/Yin_yang.png' 

function App() {
//  const [vantaEffect, setVantaEffect] = useState(null)
//  const vantaRef = useRef(null)
//  useEffect(() => {
//   if (!vantaEffect) {
//     setVantaEffect(
//       CLOUDS({
//         el: vantaRef.current,
//         THREE: THREE,
//       })
//     );
//   }

//   function handleResize(){
//     vantaEffect.resize();
//   }

//   window.addEventListener('resize', handleResize);
//   return () => {
//     if (vantaEffect) vantaEffect.destroy();
//   };
// }, [vantaEffect]);
  return (
    <div>
        <div className = 'outer-background'>
          <div className = "background-div">
            <div className="scroll-parent">
              <MainPage data = {data} yinyang = {yinyang}></MainPage>
            </div>
          </div>
        </div>
    </div>
    
  );
}

export default App;
