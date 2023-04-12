


function ProjectDetails(props){



    return (

        <div className="project-details-overlay">
            <div className='project-details'>
                        <button onClick={props.closeModal}>X</button>
                        <h2 className='project-title'>{props.title}</h2>
                        <div className='project-tags'>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>JavaScript</span>
                        </div>
                        <p className='project-description'>{props.description}</p>

                        <a className='btn' href="">View project</a>
                        <a className='btn' href="">View code</a>
            </div>
        </div>


    )





}

export default ProjectDetails