import { styleResults } from '../services/stylesResults'
import { useResults } from '../Hooks/useResults'
import './ResumeResults.css'
import { category } from '../services/category'

const ResumeResults = () => {

    const { results } = useResults()


    return (
        <div className='resumeResults'>
            <h2>Resultados</h2>
            <div className='resultContainer'>
                {
                    results?.map((el, index) => {
                        return (
                            <p className='tag' key={index} style={{
                                color: styleResults()[el.label].borderColor
                            }}>
                                {el.label} : {el.percentege}
                            </p>
                        )
                    })
                }
            </div>
            <p className='message'>{
            results.length > 0 && styleResults()[category(results)].message 
            }</p>
        </div>
    )
}

export default ResumeResults
