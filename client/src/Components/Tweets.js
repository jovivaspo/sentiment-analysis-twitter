
import './Tweet.css'
const Tweet = ({tweet}) => {
  return (
    <div className='tweetContainer'>
        <p className='textTweet'>{tweet}</p>
    </div>
  )
}

export default Tweet