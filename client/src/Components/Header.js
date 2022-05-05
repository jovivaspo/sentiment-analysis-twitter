import React from 'react'
import { BsTwitter } from 'react-icons/bs'
import "./Header.css"
const Header = () => {
    return (
        <header className='headerApp'>
            <div className='titleContainerApp'>
                <h1 className='titleApp'>Sentiment Analysis</h1>
                <BsTwitter className='titleIcon' />
            </div>
        </header>
    )
}

export default Header