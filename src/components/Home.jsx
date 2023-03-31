
import {annotate} from 'rough-notation'
import { RoughNotation, RoughNotationGroup} from "react-rough-notation";

function Home(){

   
    return (

     <RoughNotationGroup show={true}>
        <div className="homepage">

            <h1>
               {/* <RoughNotation type='highlight' color="" strokeWidth='5' order='1' > */}
               Hi, my name is Emmanuel
                {/* </RoughNotation> */}
                </h1>

                <p className="static-text">I'm an Amsterdam based</p>
                <p className="static-text">Front-End Developer with</p>
                <div className="flex">

                    
                    <p className="static-text">experience in</p>

                    <RoughNotation className='hidden' type='underline' strokeWidth='5' order='2'>
                    <ul className="dynamic-text accent">
                        <li> <span>HTML</span> </li>
                        <li> <span>CSS</span> </li>
                        <li><span>JavaScript</span> </li>
                        <li> <span>React</span> </li>
                    </ul>
                    </RoughNotation>
                </div>
        </div>
        </RoughNotationGroup>
       

    )
}

export default Home