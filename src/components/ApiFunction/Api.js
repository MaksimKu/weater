import React from "react";

import './weatStyle.scss'

function DiwWeat(props) {
//     if (props.weat)
// console.log(props.weat.list)
let dayOne = null
let dayTu = null
let dayThre = null
let arr = []
if (props.weat) {
    dayOne = new Date(props.weat.list[0].dt * 1000).getDate()
    dayTu = new Date(props.weat.list[0].dt * 1000 + 86400000).getDate()
    dayThre = new Date(props.weat.list[0].dt * 1000 + (2*86400000)).getDate()
    console.log(dayOne, dayTu, dayThre)
}
let one = []
let tu = []
let thre = []
function weat (hourWeat, arr, date) {
    arr.push(
        <ul>
            <li>
            {date.getHours()}{':00'}
            </li>
            <li>
                <img src ={`https://openweathermap.org/img/wn/${hourWeat.weather[0].icon}@2x.png`}></img>
            </li>
            <li>
                {Math.ceil(hourWeat.main.temp) + '°'}
            </li>
            <li>
                {Math.ceil(hourWeat.main.feels_like) + '°'}
            </li>
            <li>
                {hourWeat.main.humidity + '%'}
            </li>
            <li>
                {hourWeat.main.grnd_level}
            </li>
            <li>
                {hourWeat.wind.speed}
            </li>
            <li>
                {Math.ceil(hourWeat.pop * 100) + '%'}
            </li>
        </ul>
        // <div>
        //     {date.getDate()}{date.toLocaleString('default', { month: 'long' })}
        //     <br/>
        //     {date.getHours()}
        //     {':00'}
        //     <br/>
        //     {Math.ceil(hourWeat.main.temp - 273.15)}
        //     <img src ={`https://openweathermap.org/img/wn/${hourWeat.weather[0].icon}@2x.png`}></img>
        // </div>
    )
}
if (props.weat)
for (let item of props.weat.list) {
    let date = new Date(item.dt * 1000);
    switch (date.getDate()) {
        case dayOne:
            weat(item, one, date)
            break;
        case dayTu:
            weat(item, tu, date)
        break;
        case dayThre:
            weat(item, thre, date)
        break;
    }
}
return (
    <div className="wrapWeat">
        <div className="day one">
            {<NamePar/>}
            {one}
        </div>
        <div className="day tu">
            {<NamePar/>}    
           {tu}
        </div>
        <div className="day thre">
        {<NamePar/>}
            {thre}
        </div>
    </div>
)
}

function NamePar () {
    return (
        <ul className="parametr">
            <li>
            Температура
            </li>
            <li>
            Ощущается как
            </li>
            <li>
               Влажность (%) 
            </li>
            <li>
                Атмосферное давление (гПа)
            </li>
            <li>
                Скорость ветра (метр/сек)
            </li>
            <li>
                вероятность осадков
            </li>
        </ul>
    )
}

export default DiwWeat;