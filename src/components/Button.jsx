import React from 'react'

const Button = ({changeValue,children}) => {
  return (
    <button type='button' className="control__btn" onClick={changeValue}>
    {children}
</button>
    )
}

export default Button