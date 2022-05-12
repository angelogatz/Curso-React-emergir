import React from 'react'

const ExecuteFunction = ({MyFunc}) => {
  return (
    <div>
        <p>Click here to trigger the parent component function</p>
        <button  onClick={MyFunc}>Here</button>
    </div>
  )
}

export default ExecuteFunction