
import './Tweet.css'
import { cutText } from '../services/cutText'

const category = {
  'positive': '#13772a',
  'neutral': '#1D9BF0',
  'negative': '#771613'
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