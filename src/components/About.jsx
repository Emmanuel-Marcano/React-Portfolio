
import { useState, useEffect, useRef } from "react"

import alphabet from '../assets/alphabet.avif'
import graduation from '../assets/diploma.png'
import certification from '../assets/certification.png'



// let observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
  
//       if(entry.isIntersecting){
//         entry.target.classList.add('appear')
//       } else{
//         entry.target.classList.remove('appear')
//       }
  
//     })
//   })
  
  
//   let hiddenElements = document.querySelectorAll('.hidden-el')
//   hiddenElements.forEach((el) => {
//     observer.observe(el)
//   })





function About(){

    let myRef = useRef()
    let [myElementIsVisible, setMyElementIsVisible] = useState()

    var options = {
        root: myRef,
        rootMargin: '500px',
        threshold: 0
    }

    // if(entry.isIntersecting){
    //     myRef.current.classList.add('appear')
    // }

    // else{
    //     myRef.current.classList.remove('appear')
        
    // }

   


    // useEffect(function(){


    //     let observer = new IntersectionObserver(function(entries){
    //         let entry = entries[0]
    //         console.log('entry', entry)
          
    //         setMyElementIsVisible(entry.isIntersecting)
    //     })
    //     observer.observe(myRef.current, options)

    //     console.log( 'iin',myElementIsVisible)
    //     console.log(myRef.current)

    // },[])


   

    return (
      
       <div className="about-section">
            <div className="content-container">
                <div className="about-showcase">
                    <div className="about-text">
                        <div className="about-header-container">
                            <p className="about-pr">orn in Puerto Rico</p>
                            <p className="about-ams">ased in Amsterdam</p>
                        </div>
                        <p>Since 2020, I've enjoyed turning complex problems into simple, attractive and intuitive designs.
                            When I'm not coding, you'll find me drinking coffee at the nearest cafe, making fun of the latest
                            Netflix reality show alongside my girlfriend or working out.
                        </p>
                    </div>
                    <div className="about-images">
                        <div className="image-grid">
                            <div className="about-img">
                                <img src={alphabet} alt="" />
                            </div>

                            <div className="about-img">
                                <img src={alphabet} alt="" />
                            </div>

                            <div className="about-img">
                                <img src={alphabet} alt="" />
                            </div>

                            <div className="about-img">
                                <img src={alphabet} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="about-skills skills-grid">
               <div className="skills-list">
                  <p>Front-End</p>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                  </ul>
               </div>

               <div className="skills-list">
                  <p>Back-End</p>
                  <ul>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>EJS</li>
                    <li>MongoDB</li>
                  </ul>
               </div>

                <div className="skills-graph">
                    <div ref={myRef} className="skills-graphic hidden-el">
                        <span className="front">Front</span>
                        <span className="back">Back</span>
                        <span className="inner-circle-1"></span>
                        <span className="inner-circle-2"></span>
                        <span className="css-done">Graph Done with CSS</span>     
                    </div>
                </div> 
            </div>


            <div className="developer-journey">
                <div className="section-header lines">Timeline of my software development journey</div>
                <div className="content-container grid">
                    <div className="journey-text">
                        <h1>Computer Sciente Graduate</h1>
                        <p>Graduated high honors with a Bachelor's Degree in Computer Science in the Summer of 2022. 
                            Took key coursework such as Data Structures & Algorithms, Operating Systems, 
                            Systems Design and Networking
                        </p>
                        <a target="_blank" className="btn" href="https://uagm.edu/es/oferta-academica/programas/ciencias-con-concentracion-en-ciencias-de-computos"> View Curriculum</a>
                    </div>

                    <div className="journey-image">
                        <img className="grad" src={graduation} alt="" />
                    </div>
                </div>
            </div>

            <div className="developer-journey gray-background">
                <div className="content-container grid">
                     


                    <div className="journey-text order1">
                        <h1>Frontend Certified</h1>
                        <p>After graduation i concluded that i wanted to specialize in Front-End Development. 
                            As i also wanted to learn React along the way, i decided to take a course taught by Meta engineers 
                            that covers everything there is to learn about Front-End Development 
                            including React
                        </p>
                        <a target="_blank" className="btn" href="https://www.coursera.org/account/accomplishments/professional-cert/PQSHJAE7PV8N">View Certificate</a>
                    </div>

                    <div className="journey-image order2">
                       <img className="cert" src={certification} alt="" />
                    </div>  
                </div>
            </div>

            <div className="developer-journey">
                <div className="content-container grid">
                    <div className="journey-text">
                        <h1>Software Developer</h1>
                        <p>My education along with the experience gained creating personal projects
                            gives me the confidence to feel qualified to bring my abilities to a 
                            proffessional environment where i can tackle any problem for the 
                            benefit of the company and effectively solve it through code
                        </p>
                        <a className="btn" href="">Hire me</a>
                    </div>

                    <div className="journey-image">
                        <img src={alphabet} alt="" />
                    </div>    
                </div>
            </div>


            <div className="long-height">



            </div>



        </div>
    )
}

export default About