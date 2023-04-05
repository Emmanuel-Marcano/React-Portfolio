import eth from '../assets/eth.avif'
import alphabet from '../assets/alphabet.avif'
import traveler from '../assets/traveler.avif'
import cube from '../assets/cube.avif'
import astro from '../assets/astro.avif'
import cup from '../assets/cup.avif'
import insta from '../assets/insta.avif'
import foam from '../assets/foam.avif'
import dimensional from '../assets/dimensional.avif'






function Projects(){

    

    return (

     

        <div className='content-container'>

            <h1 className='h1'>projects.</h1>



        <div className='project-grid'>

            <div className="project" id='eth'>
                <img src={eth} alt="" />
                <div className='overlay'>VIEW PROJECT</div>
            </div>

            <div className="project" id='alphabet'>
                <img src={alphabet} alt="" />
                <div className='overlay'>VIEW PROJECT</div>
            </div>

            <div className="project" id='traveler'>
                <img src={traveler} alt="" />
                <div className='overlay'>VIEW PROJECT</div>
            </div>

            <div className="project" id='cube'>
                <img src={cube} alt="" />
                <div className='overlay'>VIEW PROJECT</div>
            </div>

            <div className="project" id='astro'>
                <img src={astro} alt="" />
                <div className='overlay'>VIEW PROJECT</div>
            </div>

            <div className="project" id='cup'>
                <img src={cup} alt="" />
                <div className='overlay'>VIEW PROJECT</div>
            </div>

            <div className="project" id='insta'>
                <img src={insta} alt="" />
                <div className='overlay'>VIEW PROJECT</div>
            </div>

            <div className="project" id='foam'>
                <img src={foam} alt="" />
                <div className='overlay'>VIEW PROJECT</div>
            </div>

            <div className="project" id='dimensional'>
                <img src={dimensional} alt="" />
                <div className='overlay'>VIEW PROJECT</div>
            </div>
        </div>

        </div> 
    )
}

export default Projects