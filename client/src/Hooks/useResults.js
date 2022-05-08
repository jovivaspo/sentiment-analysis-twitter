import { useEffect, useState, useContext } from "react"
import { GeneralContext } from "../context/GeneralContext"

const labels = ["positive", "neutral", "negative"]

export const useResults = () => {

    const { tweets } = useContext(GeneralContext)
    const [results, setResults] = useState([])
  
    useEffect(() => {
      //console.log("Graficando", tweets, labels)
      let datasets = labels.map(label => {
        let nTweets = 0
        tweets.forEach(({ state }) => {
          if (state === label) nTweets++
        })
        let data = [0, 0, 0]
        let index = labels.indexOf(label)
        data[index] = nTweets
        return {
          label,
          nTweets,
          percentege: ((nTweets / tweets.length)*100).toFixed(2) + "%",
          data,
        }
      })
      setResults(
        datasets
      )
    }, [])

    return {results, labels}
}