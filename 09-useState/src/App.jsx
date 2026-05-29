import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(20)

  function increase(){
    setNum(num+1)
  }

  function decrease(){
    setNum(num-1)
  }
  function jump(){
    setNum(num+5)
  }

  return (
    <div>
      <h1 className='num'>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={jump}>Jump by 5</button>
    </div>
  )
}

export default App
