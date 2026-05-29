import React, { useState } from 'react'

// Input Handling: In input headiling we handle input using TWO WAY BINDING technique.
// TWO WAY BINDING: TWO WAY BINDING is use to stop us from directly changing input and other data without using react. It is use so we can handle input using react not directly.

const App = () => {

   const [title, setTitle] = useState('')

  const submitHandler = (elem) => {
    elem.preventDefault()
    console.log("Submit Handler by", title);

    setTitle('')
  }

  return (
    <div>
      <form onSubmit={(elem)=>{
        submitHandler(elem)
      }}>
        <input type="text" 
        placeholder='Enter Your Name'
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />

        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
