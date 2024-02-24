import React, { useState, useEffect } from 'react';
import InputComp from './inputComp/inputComp';
import DiwWeat from './ApiFunction/Api.js';

import './appStyle.scss'



function App() {
  
   const [countWeat, setWeat] = useState()
   useEffect(()=>{
      if(localStorage.getItem('cityW')){
         fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=fe31656328e5d933f2a373caf7e65a95&lat=${localStorage.getItem('latW')}&lon=${localStorage.getItem('lonW')}&units=metric`)
              .then(response => response.json())
              .then(va=> {
               setWeat(va)
               }
            )
         } else {
            fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=fe31656328e5d933f2a373caf7e65a95&lat=55.7504461&lon=37.6174943&units=metric`)
              .then(response => response.json())
              .then(va=> {
               setWeat(va)
               }
            )
         }
      },[]
   )
   if (countWeat) {
      return (
         <div className='wrapper'>
            <InputComp
            countWeat={countWeat}
            setWeat = {setWeat}
            />
            <DiwWeat weat = {countWeat}/>
         </div>
          
      )
   } else {
      return (
      <div>
         Загрузка
      </div>)
   }
 
}


export default App;