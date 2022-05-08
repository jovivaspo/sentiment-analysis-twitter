import './ButtonGraph.css'

const ButtonGraph = ({ isIntersecting, targetRef }) => {

  const handleMove = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <button
        className={!isIntersecting ? 'buttonGraph' : 'buttonGraph hidden'}
        onClick={handleMove}>
        Resultados
      </button>
    </>

  )
}

export default ButtonGraph