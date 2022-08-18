import React, { useEffect, useRef, useState } from 'react'

import './LiveStreamer.scss'

export default function LiveStreamer() {

  //const [port, setport] = useState(null)

  const baudRef:any = useRef(null)
  useEffect(() => {
    baudRef.current.value = localStorage.baud == undefined ? 1000000 : localStorage.baud
    return
  }, [])

  // Try to connect to a serial port
  async function connectSerial() {
    try {
        const port = await navigator.serial.requestPort();
        await port.open({ baudRate: baudRef.current.value })
        //listenToPort(port)
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
