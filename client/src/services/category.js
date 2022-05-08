export const category = (results) => {
   
        const data = results.sort((a,b)=>{
           
              return a.nTweets - b.nTweets
          })


          return data[2].label

}