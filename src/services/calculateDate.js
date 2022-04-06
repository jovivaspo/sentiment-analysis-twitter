

const calculateDate = (time) => {
    const today = new Date()
    const lastWeek =  new Date (today - 604800000)
    const lastMonth = new Date (today - 2592000000)
    
    return {
        start_time: time === '7'? lastWeek : lastMonth,
        end_time: today
    }
}

module.exports = calculateDate