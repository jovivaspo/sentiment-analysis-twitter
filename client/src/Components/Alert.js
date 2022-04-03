import React, { useContext, useEffect, useRef } from 'react'
import { GeneralContext } from '../context/GeneralContext'
import './Alert.css'
import { BsTwitter } from 'react-icons/bs'

const Alert = () => {
    const { alert, setAlert } = useContext(GeneralContext)
    const alertRef = useRef()
    const alertColor = {
        info: '#1D9BF0',
        success: '#62AC62',
        error: '#C34A43',
        warning: '#62AC62'
    }
    useEffect(() => {
       
        if(alert.type !== '') {
            alertRef.current.style.transform = 'translate(-10px)'
            const time = setTimeout(() => {
                alertRef.current.style.transform = 'translate(200%)'
                setAlert( {type:'',
                message:''})
            }, 3000)
            return () =>{clearTimeout(time)}
        }
    }, [alert])

    return (
        <div ref={alertRef} className='alertContainer' style={{
            backgroundColor: alertColor[alert.type]
        }}>
            <BsTwitter /> 
            <p className='alertTitle'>{alert.message}</p>
        </div>
    )

}

export default Alert