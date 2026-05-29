import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

    const submitHandling = (e) => {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({title, details})

    setTask(copyTask)
    
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) =>{
    const copyTask = [...task];

    copyTask.splice(idx,1)
    setTask(copyTask)
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e) => {
        submitHandling(e)
      }}
        className='flex p-10 lg:w-1/2 items-start flex-col gap-4'
      >
      <h1 className='text-4xl font-bold'>Add Note</h1>

      {/* First Input For Heading  */}
          <input
            type="text"
            placeholder='Enter Task Title'
            className='px-5 py-2 font-medium w-full outline-none border-2 rounded'
            value={title}
            onChange={(e)=>{
              setTitle(e.target.value)
            }}
          />

          {/* Detail Wala Input  */}
          <textarea
            className='px-5 h-32 font-medium w-full outline-none py-2 border-2 rounded'
            placeholder='Enter Details'
            value={details}
            onChange={(e)=>{
              setDetails(e.target.value)
            }}
          />
          <button
            className='bg-white font-medium active:scale-95 text-black outline-none w-full px-5 py-2 rounded'
          >
            Add Notes
          </button>
      </form>
      <div className='lg:w-1/2 px-10 lg:py-5 lg:border-l-2 overflow-auto'>
      <h1 className='text-4xl font-bold'>Recent Notes</h1>
      <div className='flex gap-5 flex-wrap mt-5 justify-start items-start'>
        {
          task.map(function(elem, idx){

            return <div key={idx} className='flex justify-between flex-col items-start relative h-52 w-42 bg-cover rounded-xl text-black px-3 pt-7 pb-2.5 bg-[url("https://tse4.mm.bing.net/th/id/OIP.GrhnwV-MhVr7D_HWA9wrMwHaJl?pid=ImgDet&w=178&h=229&c=7&dpr=1.5&o=7&rm=3")]'>
              <div>
                <h3 className='leading-tight text-xl font-bold mt-1'>{elem.title}</h3>
              <p className='mt-3 leading-tight font-medium text-gray-500'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx)
              }} className='w-full bg-red-500 text-white py-1 text-xs rounded hover:bg-red-600 cursor-pointer active:scale-95 font-bold'>Delete</button>
            </div>
          })
        }
      </div>
      </div>
    </div>
  )
}

export default App
