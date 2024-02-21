import React, { useState, useEffect } from 'react';
import InputComp from './inputComp/inputComp';
import DiwWeat from './ApiFunction/Api.js';

import './appStyle.scss'



function App() {
   const [countWeat, setWeat] = useState()
 return (
   <div className='wrapper'>
      <InputComp weat={[countWeat, setWeat]}/>
      <DiwWeat weat = {countWeat}/>
   </div>
    
 )
}


export default App;