
import './Tweet.css'
import { cutText } from '../services/cutText'

const category = {
  'positive': '#48b348aa',
  'neutral': '#1D9BF0aa',
  'negative': '#C34A43aa'
}
const Tweet = ({ tweet }) => {
  return (
    <div className='tweetContainer' style={{
      background: category[tweet.state]
    }}>
      <p className='textTweet'>{cutText(tweet.message)}</p>
    </div>
  )
}

export default Tweet