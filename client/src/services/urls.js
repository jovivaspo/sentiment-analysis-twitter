
const urls = () => {
    if (process.env.REACT_APP_MOOD === 'dev') {
        return {
            search: `${process.env.REACT_APP_URL_API_LOCAL}/api/user/search`,
            tweets: `${process.env.REACT_APP_URL_API_LOCAL}/api/user/tweets`,
            analyse: `${process.env.REACT_APP_URL_API_LOCAL}/api/user/tweets/analyse`,

        }
    }
}

export {urls}