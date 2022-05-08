import { styleResults } from '../services/stylesResults'
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
import { useResults } from '../Hooks/useResults'


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
      color: '#ffffffaa',
      font: {
        size: 16
      }

    },
  },
}




const Graph = () => {

  const {results, labels} = useResults()
  

  return (
    <>
      <div className='graphContainer'>
        {!results ?
          <Spinner /> :
          <Bar options={options} data={{
            labels,
            datasets: results.map(el => {
              return (
                {
                  label: el.label,
                  data: el.data,
                  borderColor: styleResults()[el.label].borderColor,
                  backgroundColor: styleResults()[el.label].backgroundColor
                }
              )
            })
          }} />
        }
      </div>


    </>
  )

}

export default Graph
//<Bar options={options} data={dataset}