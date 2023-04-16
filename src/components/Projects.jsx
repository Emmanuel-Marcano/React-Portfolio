
import visualizerImg from '../assets/visualizer.png'
import weatherAppImg from '../assets/weatherapp.png'
import littleLemonImg from '../assets/littlelemon.png'
import steamFormImg from '../assets/steamForm.png'
import starbucksImg from '../assets/starbucks.png'
import { RoughNotation, RoughNotationGroup} from "react-rough-notation";

import ProjectDetails from './ProjectDetails'
import { useState } from 'react'


let algoVisualizer = {
    title: "Sorting Algorithm Visualizer",
    description: "Interactive user application that allows the user to visualize common sorting algorithm such as Bubble Sort, Selection Sort and Insertion Sort. I developed it to not only help myself understand sorting algorithms, but to also help other developers embarking on the data structures and algorithm journey get a firmer grasp of how they work.",
    href: "https://emmanuel-marcano.github.io/Sorting-algorithm-visualizer/",
    github: "https://github.com/Emmanuel-Marcano/Sorting-algorithm-visualizer"
}

let weatherApp = {
    title: "Weather Application",
    description: "Web Application that accepts user input and fetches to an external API called EDAMAM, the current weather of over 200 cities around the world.",
    href: "https://emmanuel-marcano.github.io/Weather-app/",
    github: "https://github.com/Emmanuel-Marcano/Weather-app"
}

let starbucksClone = {
    title: "Starbucks Homepage Clone",
    description: "A recreation of the starbucks primary homepage.",
    href: "https://emmanuel-marcano.github.io/starbucks-clone/",
    github: "https://github.com/Emmanuel-Marcano/starbucks-clone"
}

let littleLemon = {
    title: "Little Lemon",
    description: "Website of a fictional mediterranean restaurant called Little Lemon. It was the capstone project of the Frontend Developer proffesional certificate course i completed.",
    href: "https://emmanuel-marcano.github.io/restaurant-web-app/",
    github: "https://github.com/Emmanuel-Marcano/restaurant-web-app/tree/main"
}



function Projects(){

    let [showVisualizer, setShowVisualizer] = useState(false)
    let [showWeatherApp, setShowWeatherApp] = useState(false)
    let [showStarbucksPage, setStarbucksPage] = useState(false)
    let [showLittleLemon, setLittleLemon] = useState(false)

    function handleVisualizer(){
        setShowVisualizer(!showVisualizer)
    }

    function handleWeatherApp(){
        setShowWeatherApp(!showWeatherApp)
    }

    function handleStarbucksPage(){
        setStarbucksPage(!showStarbucksPage)
    }

    function handleLittleLemon(){
        setLittleLemon(!showLittleLemon)
    }





    function closeVisualizerModal(){
        setShowVisualizer(!showVisualizer)
    }

    function closeWeatherAppModal(){
        setShowWeatherApp(!showWeatherApp)
    }

    function closeStarbucksModal(){
        setStarbucksPage(!setStarbucksPage)
    }

    function closeLittleLemonModal(){
        setLittleLemon(!showLittleLemon)
    }

    console.log(showVisualizer)

   

    

    return (

        <div className='content-container'>

            <h1 className='h1'>projects.</h1>

            

            {showVisualizer && <ProjectDetails title = {algoVisualizer.title} description = {algoVisualizer.description} href={algoVisualizer.href} github={algoVisualizer.github} closeModal = {closeVisualizerModal}/>}
            {showWeatherApp && <ProjectDetails title = {weatherApp.title} description = {weatherApp.description} href={weatherApp.href} github={weatherApp.github} closeModal={closeWeatherAppModal}/>}
            {showStarbucksPage && <ProjectDetails title = {starbucksClone.title} description = {starbucksClone.description} href={starbucksClone.href} github={starbucksClone.github} closeModal={closeStarbucksModal}/>}
            {showLittleLemon && <ProjectDetails title = {littleLemon.title} description = {littleLemon.description} href={littleLemon.href} github={littleLemon.github} closeModal={closeLittleLemonModal}/>}

            

          



        <div className='project-grid'>

            <div className="project" id='visualizer'>
                <img src={visualizerImg} alt="" />
                <div className='overlay'>
                        <h1>Sorting Algorithm Visualizer</h1>
                        <span onClick={handleVisualizer} className='btn'>VIEW PROJECT</span>
                </div>
            </div>

            <div className="project" id='weatherApp'>
                <img src={weatherAppImg} alt="" />
                <div className='overlay'>
                <h1>Weather Application</h1>
                   <span onClick={handleWeatherApp} className='btn'>VIEW PROJECT</span>
                </div>
            </div>

            <div className="project" id='littleLemon'>
                <img src={littleLemonImg} alt="" />
                <div className='overlay'>

                    <h1>Little Lemon</h1>
                    <span onClick={handleLittleLemon}  className='btn'>VIEW PROJECT</span>
                </div>
            </div>

            <div className="project" id='steamForm'>
                <img src={steamFormImg} alt="" />
                <div className='overlay'>
                    
                    <h1>Steam Form</h1>
                <span  className='btn'>VIEW PROJECT</span>
                    
                    </div>
            </div>

            <div className="project" id='starbucks'>
                <img src={starbucksImg} alt="" />
                <div className='overlay'>

                    <h1>Starbucks</h1>
                    
                   <span onClick={handleStarbucksPage}  className='btn'>VIEW PROJECT</span>
                </div>
            </div>

            {/* <div className="project" id='cup'>
                <img src={cup} alt="" />
                <div className='overlay'>
                <span className='btn'>VIEW PROJECT</span>
                </div>
            </div>

            <div className="project" id='insta'>
                <img src={insta} alt="" />
                <div className='overlay'>
                <span  className='btn'>VIEW PROJECT</span>
                </div>
            </div>

            <div className="project" id='foam'>
                <img src={foam} alt="" />
                <div className='overlay'>
                <span className='btn'>VIEW PROJECT</span>
                </div>
            </div>

            <div className="project" id='dimensional'>
                <img src={dimensional} alt="" />
                <div className='overlay'>
                <span  className='btn'>VIEW PROJECT</span>
                </div>
            </div> */}
        </div>

        </div> 
    )
}

export default Projects