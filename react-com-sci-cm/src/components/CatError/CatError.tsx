import React from 'react'
import catOps from '../../asset/image/cat-ops.gif'
import TitleHeadline from '../TitleHeadline/TitleHeadline'
import './cat-error.css'

function CatError() {
    return (
        <div className="cat-container">
            <TitleHeadline
                title={'Ops! Something went wrong'}
            />
            <img src={catOps} alt="the cat found error" className="img-cat" />
        </div>
    )
}

export default CatError