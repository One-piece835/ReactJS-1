import React from 'react'

// Form Handling: In form handling we change the default beheviour of form. Which is whenever we submite a form the webpage get refresh and we stop that behaviour using preventDefault() function.
// Input Handling: In input headiling we handle input 

const App = () => {

  const submitHandler = (elem) => {
    elem.preventDefault()
    console.log("Submit Handler");
  }

  return (
    <div>
      <form onSubmit={(elem)=>{
        submitHandler(elem)
      }}>
        <input type="text" placeholder='Enter Your Name'/>
        
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
