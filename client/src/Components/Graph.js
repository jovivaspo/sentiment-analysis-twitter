import React, { useContext, useEffect } from 'react'
import { GeneralContext } from '../context/GeneralContext'

import Plot from 'react-plotly.js';

const Graph = () => {
    const {tweets} = useContext(GeneralContext)
    const [categories,setCategories] = useContext({
        "Positive":0,
        "Neutral":0,
        "Negative":0,
    })
    useEffect(()=>{
      tweets.forEach(state=>{
          {categories,categories[state]++}
      })
      setCategories(categories)
    },[])


  return (
    <Plot
        data={[
          {type: 'bar',
           x: ["Positive","Neutral","Negative"], 
           y: [categories["Positive"],categories["Neutral"],categories["Negative"]]},
        ]}
        layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
      />
  )
}

export default Graph