import React, { useEffect, useRef } from 'react'

import './LiveStreamer.scss'

export default function LiveStreamer() {

  async function test(e) {
    console.log(e.srcElement)
    const port = await navigator.serial.requestPort();
  }

  const baudRef:any = useRef(null)
  useEffect(() => {
    baudRef.current.value = localStorage.baud == undefined ? 1000000 : localStorage.baud
    navigator.serial.addEventListener('connect', test);
    return () => {
      navigator.serial.removeEventListener('connect',test)
    }
  }, [])

  // Try to connect to a serial port
  async function connectSerial() {
    try {
        port = await navigator.serial.requestPort();
        await port.open({ baudrate: baudRef.current.value })
        //listenToPort()
    } catch {
        alert("Serial Connection Failed");
    }
  }

  return (
    <section className='LiveStreamer flex'>
      <label className='verticalPad'>Baud Rate: &nbsp;</label>
      <input ref={baudRef} className='grow verticalPad' type="text" id="baud" list="baudList" style={{width: "12ch"}}/>
      <datalist id="baudList">
        <option value="9600">9600</option>
        <option value="115200">115200</option>
        <option value="1000000">1000000</option>
        <option value="2000000">2000000</option>
        <option value="3400000">3400000</option>
      </datalist>
      &nbsp;
      <button onClick={connectSerial} className='verticalPad' id="startStop" >Connect</button>

    </section>
  )
}
