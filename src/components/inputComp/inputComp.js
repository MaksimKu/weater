import React, { useState, useEffect } from 'react';
import './inputStyle.scss';


function InputComp (props) {
    const [count, setCount] = useState([])
    let input = 'Москва'
    if (localStorage.getItem('cityW')) {
        input = localStorage.getItem('cityW')
        }

    const [city, setSity] = useState(input)

    function searsh (event) {
        if (event) {
        event.preventDefault()
        }
        console.log(event.target[0].value)
        let response = fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${event.target[0].value}
        &limit=3&appid=f1deaa43117ff56e72f57110937d2a6a`)
            
        response.then(response => response.json())
        .then(va => {
            // localStorage.setItem('cityW', input)
            setCount(va)
            }
        )
        document.querySelector('.wrapSity').style.display = 'block'
    }

    return (
        <div className='inpWrapper'>
            <form
            onSubmit={searsh}
            >
                <input className = 'inp' defaultValue={city}>
                </input>
                <button 
                type='submit'
                id='but'
                >поиск</button>
            </form>
            <LocDiv loc = {count} weat = {props} cityw = {setSity}></LocDiv>
        </div>
    )
}

function LocDiv (props) {
    let arr = []
    
    for (let item of props.loc) {
        arr.push(<div onClick={
            () =>{
                let response = fetch(`https://api.openweathermap.org/data/2.5/forecast?appid=fe31656328e5d933f2a373caf7e65a95&lat=${item.lat}&lon=${item.lon}&units=metric`)
                response.then(response => response.json())
                .then(va=> {
                    localStorage.setItem('latW', item.lat)
                    localStorage.setItem('lonW', item.lon)
                    localStorage.setItem('cityW', (item.local_names ? item.local_names.ru : item.name))
                    props.weat.setWeat(va)
                })
            }
        }>{item.name + ' ' + item.country + ' ' + item.state}</div>)
    }
    // useEffect()
    return (
        <div className='wrapSity'
        onClick={(event) => {event.currentTarget.style.display = 'none'}}
        >{arr}</div>
    )
}

export default InputComp