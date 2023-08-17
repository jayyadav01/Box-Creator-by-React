import React from 'react'
import './App.css'
import { useState } from 'react'

function App() {

    const[Iswidth,setwidth] = useState();
    const[Isheight,setheight] = useState();
    const[Iscolor,setcolor] = useState('');
    
    function handleBox()
    {
        let box = document.querySelector('#bg');
        box.style.backgroundColor = `${Iscolor}`;
        box.style.width = `${Iswidth}px`;
        box.style.height = `${Isheight}px`;
    }

  return (
    <>
        <div className='parent'>
          <label>
            Width :  
            <input type='number' value={Iswidth} onChange={(e) => setwidth(e.target.value)} /> <br/>
          </label>
          <label>       
            Height :
            <input type='number' value={Isheight} onChange={(e) => setheight(e.target.value)} /> <br/>
          </label> 
          <label>
            Background Color :
            <input type='text' value={Iscolor} onChange={(e) => setcolor(e.target.value)} /> <br/>
          </label>
          
          <button onClick={handleBox} >Check</button>
          <div id='bg' ></div>

        </div>
    </>
  )
}

export default App
