import React, { useContext, useState } from 'react'
import { GeneralContext } from '../context/GeneralContext'
import { urls } from '../services/urls'
import './Search.css'
import { fetchData } from '../services/fetch'

const Search = () => {
    
    const [search, setSearch] = useState('')
    const {setLoading} = useContext(GeneralContext)

    const handlerSearch = async (e) => {
        try{
            //Eliminar el @
            e.preventDefault()
            if(search === '') return false
            setLoading(true)
            const data = await fetchData(`${urls().search}/${search}`)
            console.log(data)
            if(data.error){
                //Mostrar una alerta
                return false
            }
            //Almacenamos el usuario
        }catch(err){
            console.log(err)
        }finally{
            setLoading(false)
        }
       


    }
  return (
    <div className='formContainer'>
        <form className='formSearch'>
            <input className='inputSearch' value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Introduce username"/>
            <button className='buttonForm' type='submit' onClick={handlerSearch}>Search</button>
        </form>
    </div>
  )
}

export default Search