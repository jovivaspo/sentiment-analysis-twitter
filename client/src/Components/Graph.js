import { useContext, useEffect, useState } from 'react'
import { GeneralContext } from '../context/GeneralContext'
import './Graph.css'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import Spinner from './Spinner'


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 3,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Sentiment Analysis',
      color:'#ffffffaa',
      font:{
        size:16
      }

    },
  },
}

const labels = ["positive", "neutral", "negative"]
const colors = {
  ["positive"]: {
    borderColor: '#36ad47',
    backgroundColor: '#48b348aa',
  },
  ["neutral"]: {
    borderColor: 'rgb(53, 162, 235)',
    backgroundColor: 'rgba(53, 162, 235, 0.5)',
  },
  ["negative"]: {
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
  }
}


const Graph = () => {
  const { tweets} = useContext(GeneralContext)
  const [dataset, setDataset] = useState(null)

  useEffect(() => {
    //console.log("Graficando", tweets, labels)
    let datasets = labels.map(label => {
      let numberTweets = 0
      tweets.forEach(({ state }) => {
        if (state === label) numberTweets++
      })
      let data = [0, 0, 0]
      let index = labels.indexOf(label)
      data[index] = numberTweets
      return {
        label,
        data,
        borderColor: colors[label].borderColor,
        backgroundColor: colors[label].backgroundColor
      }
    })
    setDataset({
      labels,
      datasets
    })
  }, [])

  //console.log(dataset)

  return (
    <>
      <div className='graphContainer'>
        {!dataset ? <Spinner /> : <Bar options={options} data={dataset}  />}
      </div>


    </>
  )

}

export default Graph
//<Bar options={options} data={dataset}