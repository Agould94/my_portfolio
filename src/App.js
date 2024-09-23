import React, { useEffect, useState, useRef } from "react";
import './new.css';
import MainPage from "./components/newApp/MainPage";
import CLOUDS from 'vanta/dist/vanta.clouds.min'
import * as THREE from 'three'
import data from'./db.json'
import yinyang from './assets/Yin_yang.png' 
import leaf from './assets/leaf2.png'

function App() {
  return (
    <div>
        <div className = 'outer-background'>
          <div className = "background-div">
            <div className="scroll-parent">
              <MainPage data = {data} yinyang = {yinyang} leaf = {leaf}></MainPage>
            </div>
          </div>
        </div>
    </div>
    
  );
}

export default App;
