import React, { useState, useEffect } from 'react';
import './inputStyle.scss';


// function searsh (event) {
//     event.preventDefault()
//     let input = document.querySelector('.inp').value
//     console.log(input)
//     // let input = 'коломна'
//     let res;
//     let response = fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${input}
//     &limit=3&appid=f1deaa43117ff56e72f57110937d2a6a`)
        
//     response.then(response => response.json())
//     .then(va=> 
//         console.log(va)
//         // setCount(count= va)
//         )
//     // .then(setCount(res.forEach(item=> count.push(item))))
// }
function InputComp (propWeat) {
    console.log(propWeat.weat)
    function searsh (event) {
        event.preventDefault()
        let input = document.querySelector('.inp').value
        console.log(input)
        // let input = 'коломна'
        let res;
        let response = fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${input}
        &limit=3&appid=f1deaa43117ff56e72f57110937d2a6a`)
            
        response.then(response => response.json())
        .then(va=> 
            // console.log(va)
            setCount(count = va)
            )
        // .then(setCount(res.forEach(item=> count.push(item))))
    }

    let location = 'Москва'
    if (localStorage.getItem('weater') !== null) {
        location = localStorage.getItem('weater')
    }
    let [count, setCount] = useState([])

    return (
        <div className='inpWrapper'>
            <form
            onSubmit={searsh}
            >
                <input className = 'inp' defaultValue={location}>
                </input>
                <button 
                type='submit'
                id='but'
                // onClick={searsh(count, setCount)}
                >поиск</button>
            </form>
            <LocDiv loc = {count} weat = {propWeat.weat}></LocDiv>
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
                .then(va=> props.weat[1](props.weat[0] = va))
                // props.weat[1](props.weat[0] = item);
                // console.log(props.weat[0])
            }
        }>{item.name + item.country + item.state}</div>)
    }
    return (
        <div>{arr}</div>
    )
}

export default InputComp