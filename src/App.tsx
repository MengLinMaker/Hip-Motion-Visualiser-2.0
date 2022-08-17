import './App.scss'
import Canvas3D from './components/Canvas3D/Canvas3D'
import LiveStreamer from './components/LiveStreamer/LiveStreamer'

function App() {
  return (
    <div className='body'>
      <Canvas3D/>
      <LiveStreamer/>
    </div>
  )
}

export default App

