
const fetchData = async (url) => {
    try{
        const res = await fetch(url,{
            headers:{
                accept: "application/json"
            }
        })
        const data = await res.json()
        console.log(data)
        return data
    }catch(err){
        console.log(err)
    }
}

export {fetchData}

