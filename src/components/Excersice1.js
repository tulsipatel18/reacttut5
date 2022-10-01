import React from 'react'

function Excersice1(props) {
  return (
    <div>
      {/* clear text */}
        <button className='btn btn-primary' onClick={props.handleClear}>Clear Text</button>

       {/* copy text */}
        <button className='btn btn-primary mx-3' onClick={props.handleCopy}>Copy Text</button>

        {/* remove extraspaces */}
        <button className='btn btn-primary mx-3' onClick={props.handleExtraSpace}>Remove Extra Space</button>

        {/* chatAt text */}
        <button className='btn btn-primary my-3' onClick={props.handleCharAt}>charAt </button>

    </div>
  )
}

export default Excersice1