import React from 'react'
import catOps from '../../asset/image/cat-ops.gif'
import ShowImage from '../ShowImage/ShowImage'
import TitleHeadline from '../TitleHeadline/TitleHeadline'

function CatError() {
    return (
        <div className="cat-container">
            <TitleHeadline
                title={'Ops! Something went wrong'}
            />
            <ShowImage src={catOps} alt="the cat found error" />
        </div>
    )
}

export default CatError