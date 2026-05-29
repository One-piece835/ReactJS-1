import React, { useState } from 'react'

const App = () => {

// const [num, setNum] = useState({user:'Aditya', age:21})

//   const btnClick = () => {
//     const newNum = {...num};
//     newNum.user = 'Ajay'
//     setNum(newNum)
//     console.log(newNum);
    
//   }

const [num, setNum] = useState([10,20,30])

  const btnClick = () => {
   const newNum = [...num]
   newNum.push(99)
   setNum(newNum)
   console.log(newNum);
  }

  return (
    <div>
      {/* <h1>{num.user}, {num.age}</h1> */}
      <h1>{num}</h1>
      <button onClick={btnClick}>Click</button>
    </div>
  )
}

export default App
