import React from 'react'

const App = () => {

  // function btnClick(){
  //   console.log("btn click");
  // }

  const pageScrolling = (elem) =>{
    console.log("page scrolling... at speed", elem);
  }

  return (
    <div onWheel={(elem)=>{
      // console.log(elem.deltaY);
      
      pageScrolling(elem.deltaY)
    }}>


      {/* <div>
        <button onClick={btnClick}>Click Here</button>
      </div> */}

      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>
      
    </div>
  )
}

export default App 
