import React from 'react'

import './LiveStreamer.scss'

export default function LiveStreamer() {



  return (
    <section className='LiveStreamer flex'>
      <label className='verticalPad'>Baud Rate: &nbsp;</label>
      <input className='grow verticalPad' type="text" id="baud" list="baudList" style={{width: "12ch"}}/>
      <datalist id="baudList">
        <option value="9600">9600</option>
        <option value="115200">115200</option>
        <option value="1000000">1000000</option>
        <option value="2000000">2000000</option>
        <option value="3400000">3400000</option>
      </datalist>
      &nbsp;
      <button className='verticalPad' id="startStop" >Connect</button>

    </section>
  )
}
