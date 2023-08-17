import React, { useState, useRef } from 'react'
import './App.css'

function App() {

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    const[Iswidth,setIswidth] = useState();
    const[Isheight,setIsheight] = useState();
    const[Iscolor,setIscolor] = useState('');
    
    function handleBox()
    {
        let box = document.querySelector('#bg');

        box.style.backgroundColor = `${Iscolor}`;
        box.style.width = `${Iswidth}px`;
        box.style.height = `${Isheight}px`;
        
        setIswidth('');
        setIsheight('');
        setIscolor('');

        inputRef1.current.focus();
    }
    
    function key1down(event)
    {
      if(event.key === 'Enter')
      {
        event.preventDefault();
        inputRef2.current.focus();
      }

    }

    function key2down(event)
    {
      if(event.key === 'Enter')
      {
        event.preventDefault();
        inputRef3.current.focus();
      }
    }

    function key3down(event)
    {
        let button = document.querySelector('button');
        if(event.key === 'Enter')
        {
            event.preventDefault();
            button.click();
        }
    }

  return (
    <>
        <div className='parent'>
          <label>
            Width :  
            <input ref={inputRef1} onKeyDown={key1down} type='text' value={Iswidth} onChange={(e) => setIswidth(e.target.value)} /> <br/>
          </label>
          <label>       
            Height :
            <input ref={inputRef2} onKeyDown={key2down} type='text' value={Isheight} onChange={(e) => setIsheight(e.target.value)} /> <br/>
          </label> 
          <label>
            Background Color :
            <input ref={inputRef3} onKeyDown={key3down} type='text' value={Iscolor} onChange={(e) => setIscolor(e.target.value)} /> <br/>
          </label>
          
          <button onClick={handleBox} >Check</button>

          <div id='bg' ></div>

        </div>
    </>
  )
}

export default App
