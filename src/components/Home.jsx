
import { RoughNotation, RoughNotationGroup} from "react-rough-notation";
import {Link} from 'react-router-dom'
import selfie from '../assets/selfie.jpeg'
function Home(){

    return (
        <div className="homepage">

            <div className="light-half">
                <img className="selfie" src={selfie} alt="" />

                    <h1>Hi, my name is Emmanuel</h1>
            </div>

                <div className="dark-half">
                    <p className="static-text">I'm an Amsterdam based</p>
                    <p className="static-text">Front-End Developer with</p>
                    <div className="flex">
                        <p className="static-text">experience in</p>
                        <ul className="dynamic-text accent">
                            <li> <span>HTML</span> </li>
                            <li> <span>CSS</span> </li>
                            <li><span>JavaScript</span> </li>
                            <li> <span>React</span> </li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default Home