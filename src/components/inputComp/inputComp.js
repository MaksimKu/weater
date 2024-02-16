import React, { useState, useEffect } from 'react';
// import set from '../ApiFunction/Api';


function searsh () {
    let input = document.querySelector('.inp').value
    console.log(input)
    let formData = new FormData()
    formData.append('q', input);
    formData.append('limit', '3');
    formData.append('appid', 'f1deaa43117ff56e72f57110937d2a6a');
    let response = fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input}
    &limit=3&appid=f1deaa43117ff56e72f57110937d2a6a`)
        
    response.then(response => response.json())
    .then(va=>console.log(va))
    // .then(com=>console.log(com))
    // console.log(response.json())
}
function InputComp () {
    
    let location = 'Москва'
    if (localStorage.getItem('weater') !== null) {
        location = localStorage.getItem('weater')
    }
    return (
        <div className='inpWrapper'>
            <input className = 'inp' defaultValue={location}>
            </input>
            <button onClick={searsh}>поиск</button>
        </div>
    )
}



export default InputComp