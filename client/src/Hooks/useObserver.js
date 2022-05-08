import { useEffect, useState, useMemo } from "react"

const useObserver = (targetRef, options) => {
    const [isIntersecting, setIsIntersecting] = useState(false)

    const optionsObserver = useMemo(() => {
        return options
      }, [options])

    useEffect(()=>{
       
        const observer = new IntersectionObserver((entries)=>{
            const [entry] = entries
            setIsIntersecting(entry.isIntersecting)
        },optionsObserver)

        if(targetRef.current)  observer.observe(targetRef.current)

        return () => {
            if(targetRef.current) observer.unobserve(targetRef.current)
        }
       
    },[targetRef,optionsObserver])

    return isIntersecting
}

export {useObserver}