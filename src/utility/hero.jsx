import React, {useState, useEffect} from 'react'

export const Hero = () => {
  const [dropDown,setDropDown]=useState(0);
  useEffect(()=>{
    const handelDropDown=()=>{
      const CommandDropDown = document.getElementById('commands')
      
    }
  })
  return (
    <div className='flex w-screen p-5 box-border rounded'>
      <div className='left-part bg-neutral-900 w-1/6 rounded-l-lg text-blurple-color p-2' id='left-part'>
        <nav>
          <ul>
            <li className='font-extrabold text-lg tracking-wider uppercase' id="commands">Commands</li>
          </ul>
        </nav>
      </div>

      <div className="right-part bg-gray-800 w-screen rounded-r-lg text-white" id='right-part'>
        <div className="content">
          <div className="prefix">
            This is a prefix comamnd
          </div>
        </div>
      </div>
    </div>
  )
}

function CommandDropDown(){
  return (
    <nav >
      <ul></ul>
    </nav>
  ) 
}
