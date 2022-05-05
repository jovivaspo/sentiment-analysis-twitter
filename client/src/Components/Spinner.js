import React from 'react'
import { SpinnerCircular } from 'spinners-react'
import './Spinner.css'

const Spinner = () => {
  return (
    <div className='spinnerContainer'>
        <SpinnerCircular size={40}
        thickness={100}
        speed={100}
        color="rgba(29, 155, 240, 1)"
        secondaryColor="rgba(128, 128, 128, 0.9)"
        className='spinner'
      />
    </div>
  )
}

export default Spinner