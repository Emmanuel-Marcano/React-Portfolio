
function Contact(){

    return (
        <div className="contact-section">
            <div className="panel">
                <div className="contact-text">
                    <h1 className="heading">Get in touch</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                       Cumque quidem atque, sint fugiat reprehenderit, expedita 
                       velit nostrum architecto, magni optio a! Deleniti velit 
                       fuga unde sequi, quis veritatis debitis corrupti.</p>

                       <a className="btn" href="">Hover me</a>
                </div>
                <div className="contact-cards">

                    <div className="card linkedin-card">
                        <div className="card-curve">
                            <a className="contact-icons contact-linkedin" href=""> <i className="fa-brands fa-linkedin-in fa-2x"></i></a>
                            <a className="contact-icons contact-email " href=""> <i className="fa-solid fa-envelope fa-2x"></i></a>
                            <a className="contact-icons contact-github" href=""> <i className="fa-brands fa-github fa-2x"></i></a>
                           


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