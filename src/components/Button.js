import React from 'react'

const Button = ({increment}) => {
  return (
    <button className='btn' onClick={increment}>Add 1</button>
  )
}

export default Button