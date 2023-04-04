import card from '../assets/business-card1.png'
import card2 from '../assets/business-card2.png'

function Contact(){

    return (
        <div className="contact-section">
            <div className="panel panel-grid">
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
                        <img src={card} alt="" />

                    </div>

                    <div className="card github-card">
                        <img src={card2} alt="" />

                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact