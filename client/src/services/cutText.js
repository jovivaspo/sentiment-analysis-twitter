export const cutText = ( text ) =>{
    
  text =  text[151] ? text.slice(0,151) + '...' : text   

    return text
}
