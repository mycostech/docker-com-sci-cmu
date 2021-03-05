import React from "react"
import TitleHeadline from "../TitleHeadline/TitleHeadline"

import WelcomeCatImg from '../../asset/image/welcome-to-the-team-cliff-youre-one-of-us-meow.jpeg'
import ShowImage from "../ShowImage/ShowImage"
function Welcome () {

    return (
        <div className="cat-container">
            <TitleHeadline
                title={'Welcome!'}
            />

            <ShowImage src={WelcomeCatImg} alt="call api successfully" />
        </div>
    )
}

export default Welcome