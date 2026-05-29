import React from 'react'
import Card from './components/Cards'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Aditya' age={21} img="https://images.unsplash.com/photo-1748723594319-142e211b46a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5NHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8" />
      <Card user='Aman' age={22} img="https://images.unsplash.com/photo-1771924310799-930349452c76?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDk5fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D" />
    </div>
     
  )
}

export default App
