
import { useState, useEffect, useRef } from "react"



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

   


    useEffect(function(){


        let observer = new IntersectionObserver(function(entries){
            let entry = entries[0]
            console.log('entry', entry)
          
            setMyElementIsVisible(entry.isIntersecting)
        })
        observer.observe(myRef.current, options)

        console.log( 'iin',myElementIsVisible)
        console.log(myRef.current)

    },[])


   

    return (
      
       <div className="about-section">
            <div className="about-showcase">

                <div className="about-text">
                    <h1>About</h1>
                    <p>Born in Puerto Rico</p>
                    <p>Based in Amsterdam</p>
                    <p>Since 2020, I've enjoyed turning complex problems into simple, attractive and intuitive designs.
                        When I'm not coding, you'll find me drinking coffee at the nearest cafe, making fun of the latest
                        Netflix reality show alongside my girlfriend or working out.
                    </p>
                </div>
                <div className="about-image-grid">


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
                    <li>Bootstrap (a bit)</li>
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
                    <span className="front">Front-End</span>
                    <span className="back">Back-End</span>
                    <span className="inner-circle"></span>
              </div>
              </div>
            </div>


            <div className="long-height">



            </div>



       </div>
    )
}

export default About