import eth from '../assets/eth.avif'
import alphabet from '../assets/alphabet.avif'
import traveler from '../assets/traveler.avif'
import cube from '../assets/cube.avif'
import astro from '../assets/astro.avif'
import cup from '../assets/cup.avif'
import insta from '../assets/insta.avif'
import foam from '../assets/foam.avif'
import dimensional from '../assets/dimensional.avif'

import ProjectDetails from './ProjectDetails'
import { useState } from 'react'


let algoVisualizer = {
    title: "Sorting Algorithm Visualizer",
    description: "Interactive user application that allows the user to visualize common sorting algorithm such as Bubble Sort, Selection Sort and Insertion Sort. I developed it to not only help myself understand sorting algorithms, but to also help other developers embarking on the data structures and algorithm journey get a grasp of how they work."
}

let weatherApp = {
    title: "Weather Application",
    description: "Web Application that accepts user input and fetches to an external API called EDAMAM, the current weather of over 200 cities around the world."
}

let starbucksClone = {
    title: "Starbucks Homepage Clone",
    description: "A recreation of the starbucks primary homepage."
}



function Projects(){

    let [showVisualizer, setShowVisualizer] = useState(false)
    let [showWeatherApp, setShowWeatherApp] = useState(false)
    let [showStarbucksPage, setStarbucksPage] = useState(false)

    function handleVisualizer(){
        setShowVisualizer(!showVisualizer)
    }

    function handleWeatherApp(){
        setShowWeatherApp(!showWeatherApp)
    }

    function handleStarbucksPage(){
        setStarbucksPage(!showStarbucksPage)
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

    console.log(showVisualizer)

   

    

    return (

        <div className='content-container'>

            <h1 className='h1'>projects.</h1>

            

            {showVisualizer && <ProjectDetails title = {algoVisualizer.title} description = {algoVisualizer.description} closeModal = {closeVisualizerModal}/>}
            {showWeatherApp && <ProjectDetails title = {weatherApp.title} description = {weatherApp.description} closeModal={closeWeatherAppModal}/>}
            {showStarbucksPage && <ProjectDetails title = {starbucksClone.title} description = {starbucksClone.description} closeModal={closeStarbucksModal}/>}

            

          



        <div className='project-grid'>

            <div className="project" id='eth'>
                <img src={eth} alt="" />
                <div className='overlay'>
                        <h1>Sorting Algorithm Visualizer</h1>
                        <span onClick={handleVisualizer} className='btn'>VIEW PROJECT</span>
                </div>
            </div>

            <div className="project" id='alphabet'>
                <img src={alphabet} alt="" />
                <div className='overlay'>
                <h1>Weather Application</h1>
                   <span onClick={handleWeatherApp} className='btn'>VIEW PROJECT</span>
                </div>
            </div>

            <div className="project" id='traveler'>
                <img src={traveler} alt="" />
                <div className='overlay'>

                    <h1>Starbucks</h1>
                    <span onClick={handleStarbucksPage}  className='btn'>VIEW PROJECT</span>
                </div>
            </div>

            <div className="project" id='cube'>
                <img src={cube} alt="" />
                <div className='overlay'>
                    
                    
                <span  className='btn'>VIEW PROJECT</span>
                    
                    </div>
            </div>

            <div className="project" id='astro'>
                <img src={astro} alt="" />
                <div className='overlay'>
                    
                   <span  className='btn'>VIEW PROJECT</span>
                </div>
            </div>

            <div className="project" id='cup'>
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
            </div>
        </div>

        </div> 
    )
}

export default Projects