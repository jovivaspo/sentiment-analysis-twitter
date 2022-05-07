import './ButtonGraph.css'

const ButtonGraph = ({ isIntersecting, targetRef }) => {

  console.log(targetRef)

  const handleMove = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <button
        className={!isIntersecting ? 'buttonGraph' : 'buttonGraph hidden'}
        onClick={handleMove}>
        Gráfica
      </button>
    </>

  )
}

export default ButtonGraph