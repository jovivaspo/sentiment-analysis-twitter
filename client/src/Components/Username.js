import React, { useContext } from 'react'
import { GeneralContext } from '../context/GeneralContext'
import TweetsContainer from './TweetsContainer'
import './Username.css'


const Username = () => {
    const { user} = useContext(GeneralContext)
    const date = new Date(user.createdAt)
    const months ={
        '1':'Enero',
        '2':'Febrero',
        '3':'Marzo',
        '4':'Abril',
        '5':'Mayo',
        '6':'Junio',
        '7': 'Julio',
        '8': 'Agosto',
        '9':'Septiembre',
        '10':'Octubre',
        '11':'Noviembre',
        '0':'Diciembre'
    }
    const month = date.getUTCMonth()
    const year = date.getFullYear()

    return (
        <div className='usernameContainer'>
          
                <img src={user.avatar} className='avatar'/>
                <h4>{user.name}</h4>
                <p className='username'>@{user.username}</p>
                <span className='createdAt'>Creado en {months[month]} de {year}</span>
                <div className='metricsContainer'>
                    <span className='metrics'>{user.metrics.following_count} Siguiendo</span>
                    <span  className='metrics'>{user.metrics.followers_count} Seguidores</span>
                </div>
                <TweetsContainer/>
        </div>
    )
}

export default Username

