
import { useState, useEffect, useRef, useCallback } from "react"
import {useInView} from "react-intersection-observer"

import alphabet from '../assets/alphabet.avif'
import graduation from '../assets/diploma.png'
import certification from '../assets/certification.png'


function About(){

    let {ref: diplomaRef, inView: diplomaIsVisible} = useInView()
    let {ref: certRef, inView: certIsVisible} = useInView()

    return (
      
       <div className="about-section">
            <div className="content-container">
                <div className="about-showcase">
                    <div className="about-text">

                        <h1 className="h1">about.</h1>

                        <span>Born in Puerto Rico. Currently based in Amsterdam, Netherlands.</span>
                       
                        {/* <h2>Born in Puerto Rico. <br /> Based in Amsterdam.</h2> */}
                        

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
                    <div  className="skills-graphic">
                        <span className="front">Front</span>
                        <span className="back">Back</span>
                        <span className="inner-circle-1"></span>
                        <span className="inner-circle-2"></span>
                        <span className="css-done">Graph Done with CSS</span>     
                    </div>
                </div> 
            </div>


            <div  className="developer-journey">
                {/* <div className="section-header lines">Timeline of my software development journey</div> */}
                <div className="content-container grid">
                    <div  className="journey-text">
                        <h1>Computer Sciente Graduate</h1>
                        <p >Graduated high honors with a Bachelor's Degree in Computer Science in the Summer of 2022. 
                            Took key coursework such as Data Structures & Algorithms, Operating Systems, 
                            Systems Design and Networking.
                        </p>

                        <a target="_blank" className="btn" href="https://uagm.edu/es/oferta-academica/programas/ciencias-con-concentracion-en-ciencias-de-computos"> View Curriculum</a>
                    </div>

                    <div className="journey-image">
                        <img ref={diplomaRef}  className={`grad ${diplomaIsVisible && "appear"}`} src={graduation} alt="" />
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
                            including React.
                        </p>
                        <a target="_blank" className="btn" href="https://www.coursera.org/account/accomplishments/professional-cert/PQSHJAE7PV8N">View Certificate</a>
                    </div>

                    <div className="journey-image order2">
                       <img ref={certRef} className={`cert ${certIsVisible && "appear"}`} src={certification} alt="" />
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
                            benefit of the company and effectively solve it through code.
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