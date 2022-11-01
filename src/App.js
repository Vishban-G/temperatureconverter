// **********dont edit here**********
import React, { useState } from 'react'
import './temperature.css'
const App = () => {
  const[celfah,setcelfah]=useState()
  const[fullcelfah,setfullcelfah]=useState()
  const inputevent =(event)=>{
    event.preventDefault();
    setcelfah(event.target.value)
  }
  const handlesubmit=()=>{
    setfullcelfah(parseFloat(celfah)*1.8+32+" degree fahrenheit")
  }
  const[celkel,setcelkel]=useState()
  const[fullcelkel,setfullcelkel]=useState()
  const inputeventceltokel = (event)=>{
    event.preventDefault()
    setcelkel(event.target.value)
  }
  const handlesubmitcelkel=()=>{
    setfullcelkel(parseFloat(celkel)+273.15+" kelvin")
  }
  const[fahcel,setfahcel]=useState()
  const[fullfahcel,setfullfahcel]=useState()
  const inputeventfahrtocel =(event)=>{
    event.preventDefault()
    setfahcel(event.target.value)
  }
  const handlesubmitfahcel =()=>{
    setfullfahcel(parseFloat((fahcel)-32)*.5556+" degree celcius")
  }
  const[fahkel,setfahkel]=useState()
  const[fullfahkel,setfullfahkel]=useState()
  const inputeventfahrtokel=(event)=>{
    event.preventDefault()
    setfahkel(event.target.value)
  } 
  const handlesubmitfahkel=()=>{
    setfullfahkel(parseFloat((fahkel)-32)*.5556+parseFloat(273.15)+" kelvin")
  }
  const[kelcel,setkelcel]=useState()
  const[fullkelcel,setfullkelcel]=useState()
  const inputeventkeltocel =(event)=>{
    event.preventDefault()
    setkelcel(event.target.value)
  }
  const handlesubmitkelcel=()=>{
    setfullkelcel(parseFloat(kelcel)-273.15+" degree celcius")
  }
  const[kelfah,setkelfah]=useState()
  const[fullkelfah,setfullkelfah]=useState()
  const inputeventkeltofah =(event)=>{
    event.preventDefault()
    setkelfah(event.target.value)
  }
  const handlesubmitkelfah=()=>{
    setfullkelfah((parseFloat(kelfah)-273.15)*1.8+parseFloat(32)+" degree fahrenheit")
  }
  return (
   
    <div className='body'>
      <h1 className='heading'>TEMPERATURE CONVERTER APP</h1>
    <div className='part1'>
      <div className='celciustofahren'>
      <div className='celc_fahr'>
        <p className='one'>CELCIUS TO FAHRENHEIT</p>
      <input
      type="number"
      name="celc1"
      id='celc1'
      onChange={inputevent}
      value={celfah}
      placeholder="enter temperature in celcius"
      />
      {/* <span>degree celcius</span> */}
      <button className='celfah' onClick={handlesubmit}>CONVERT</button>
      
      <p id='celtofah'>{fullcelfah}</p>
      </div>
      </div>
      <div className='celciustokelvin'>
        <div className='celc-kelv'>
          <p className='two'>CELCIUS TO KELVIN</p>
        <input
        type="number"
        name="celc2"
        id='celc2'
        placeholder='enter temperature in celcius'
        onChange={inputeventceltokel}
        value={celkel}/>
        <button className='celkel' onClick={handlesubmitcelkel}>CONVERT</button>
        <p id='celtokel'>{fullcelkel}</p>
        </div>
      </div>
      <div className='fahrentocelcius'>
        <div className='fahr-celc'>
          <p className='three'>FAHRENHEIT TO CELCIUS</p>
        <input
        type='number'
        name='fahr1'
        id='fahr1'
        onChange={inputeventfahrtocel}
        placeholder="enter temperature in fahrenheit"
        value={fahcel}/>
        <button className='fahcel' onClick={handlesubmitfahcel}>CONVERT</button>
        <p id='fahtocel'>{fullfahcel}</p>
        </div>
      </div>
      </div>
      <br/>
      
      <hr/>
      <div className='part2'>
<div className='fahrentokel'>
  <div className='fahr-kel'>
    <p className='four'>FAHRENHEIT TO KELVIN</p>
  <input
  type='number'
  name='fahr2'
  id='fahr2'
  placeholder='enter temperature in fahrenheit'
  onChange={inputeventfahrtokel}
  value={fahkel}/>
  <button className='fahkel' onClick={handlesubmitfahkel}>CONVERT</button>
  <p id='fahtokel'>{fullfahkel}</p>
  </div>
</div>
<div className='kelvintocelcius'>
  <div className='kel-cel'>
    <p className='five'>KELVIN TO CELCIUS</p>
    <input
    type='number'
    name='kel1'
    id='kel1'
    placeholder='enter temperature in kelvin'
    onChange={inputeventkeltocel}
    value={kelcel}/>
    <button className='kelcel' onClick={handlesubmitkelcel}>CONVERT</button>
    <p id='keltocel'> {fullkelcel}</p>
    </div>
</div>
<div className='kelvintofahren'>
  <div className='kel-fah'>
    <p className='six'>KELVIN TO FAHRENHEIT</p>
  <input
  type='number'
  name='kel2'
  id='kel2'
  placeholder='enter temperature in kelvin'
  onChange={inputeventkeltofah}
  value={kelfah}/>
  <button className='kelfah' onClick={handlesubmitkelfah}>CONVERT</button>
  <p id='keltofah'>{fullkelfah}</p>
  </div>
</div>
</div>
    </div>
  )
}

export default App
// **********dont edit here and delete everything below this line*********
