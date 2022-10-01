import React,{useState} from 'react'


function Excrsise2() {

    const [color, setColor] = useState('');
    
    // red color
    const flateColorRed = () =>{
        setColor(document.body.style.backgroundColor = 'red')
    }

    // blue color
    const flateColorBlue = () =>{
        setColor(document.body.style.backgroundColor = 'blue')
    }

    // yellow color 
    const flateColorYellow = () =>{
        setColor(document.body.style.backgroundColor = 'yellow')
    }

    //green color

    const flateColorGreen = () =>{
        setColor(document.body.style.backgroundColor = 'green')
    }

  return (
    <div>
        {/* red */}
        <button type="button" style={{backgroundColor: 'red'}} onClick={flateColorRed}></button>

        {/* blue */}
        <button type="button" style={{backgroundColor: 'blue'}} onClick={flateColorBlue}></button>

        {/* yellow */}
        <button type="button" style={{backgroundColor: 'yellow'}} onClick={flateColorYellow}></button>

        {/* green */}
        <button type="button" style={{backgroundColor: 'green'}} onClick={flateColorGreen}></button>

    </div>
  )
}

export default Excrsise2