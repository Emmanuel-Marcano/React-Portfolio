
import { RoughNotation, RoughNotationGroup} from "react-rough-notation";
function Home(){

    return (
        <div className="homepage">

            <h1>
                <RoughNotation type="underline" strokeWidth={2} show={true}>
                Hi, my name is Emmanuel
                </RoughNotation>
                </h1>
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
    )
}

export default Home