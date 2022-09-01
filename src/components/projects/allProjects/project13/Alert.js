import React from 'react'

const Alert = (props) => {
  return (
    props.alert && <div>
        <p className='alert-text'>{props.alert.msg}</p>
    </div>
  )
}

export default Alert;