
import './Tweet.css'
import { cutText } from '../services/cutText'

const Tweet = ({tweet}) => {
  return (
    <div className='tweetContainer'>
        <p className='textTweet'>{cutText(tweet)}</p>
    </div>
  )
}

export default Tweet