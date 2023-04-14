

import { useState, useRef } from "react"

function Contact(){

    let [emailCopied, setEmailCopied] = useState(false)
    const myEmail = "emmanueljulian.marcano@gmail.com"
    function handleEmailClick(){
        navigator.clipboard.writeText(myEmail)
        setEmailCopied(!emailCopied)
    }


    return (

        
     

        <div className="contact-section">
            <div className="panel">
                <div className="contact-text">
                    <h1 className="heading">Get in touch</h1>
                    <p>Interested in getting in contact with me? 
                       You can reach me at any of the links down below. 
                       Thank you for checking out my portfolio. 
                       I look forward to hearing from you! </p>

                      
                      
                </div>
                <div className="contact-cards">

                    <div className="card linkedin-card">
                        <div className="socials">
                            <span className="vertical-contact">CONTACT</span>
                            <a target="_blank" className="contact-icons contact-linkedin" href="https://www.linkedin.com/in/emmanuel-marcano-a7a847246/"> <i className="fa-brands fa-linkedin fa-2x"></i></a>
                            <a  onAnimationEnd={setEmailCopied => !emailCopied} onClick={handleEmailClick} className="contact-icons contact-email " href="#"> <i className="fa-solid fa-envelope fa-2x"></i></a>
                            <a target="_blank" className="contact-icons contact-github" href="https://github.com/Emmanuel-Marcano"> <i className="fa-brands fa-github fa-2x"></i></a>
                            {emailCopied && <span onAnimationEnd={function(){
                                setEmailCopied(!emailCopied)
                            }} className="email-copied">Email copied to clipboard</span>}

                        </div>
                    </div>

                    <div className="card github-card">
                      

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact