

import {useRef, useState} from 'react'
import {Link} from 'react-router-dom'
let previousElement;



function Navigation({nav}){
    let [houseIcon, setHouseIcon] = useState("icon fa-solid fa-house fa-xl home")
    let [aboutIcon, setAboutIcon] = useState("icon fa-solid fa-user fa-xl about")
    let [projectsIcon, setProjectsIcon] = useState("icon fa-solid fa-folder fa-xl projects")
    let [contactIcon, setContactIcon] = useState("icon fa-solid fa-envelope fa-xl contact")
    let [blogIcon, setBlogIcon] = useState("icon fa-solid fa-pen fa-xl blog")

    let homeElement  = useRef()
    let aboutElement = useRef()
    let projectsElement = useRef()
    let contactElement = useRef()
    let blogElement = useRef()
    let navigation = useRef()

    

    window.onscroll = function(ev) {

      
        if ((window.scrollY + window.innerHeight + 100) >= document.body.scrollHeight && window.location.toString().includes("projects")) {
            navigation.current.classList.add('slide-off')
        }
        else {
            navigation.current.classList.remove('slide-off')
        }
    };
   
    function handleClick(e){

        if(previousElement){
            if(previousElement === homeElement.current){
               
                homeElement.current.firstElementChild.classList.remove("fa-house-chimney")
            }
            else if(previousElement === aboutElement.current){
              
                aboutElement.current.firstElementChild.classList.remove("fa-user-tie")
            }
            else if(previousElement === projectsElement.current){
                
                projectsElement.current.firstElementChild.classList.remove("fa-folder-open")
            }
            else if(previousElement === contactElement.current){
               
                contactElement.current.firstElementChild.classList.remove("fa-envelope-circle-check")
            }
            else if(previousElement === blogElement.current){
                blogElement.current.firstElementChild.classList.remove("fa-pen-to-square")
            }
        }

        if(e.target.classList.contains("home")){
            homeElement.current.firstElementChild.classList.add("fa-house-chimney")
            previousElement = homeElement.current
            nav.current.style.transform = `translateX(${homeElement.current.getBoundingClientRect().left}px)`
        }
        else if(e.target.classList.contains("about")){
            aboutElement.current.firstElementChild.classList.add("fa-user-tie")
            previousElement = aboutElement.current
            nav.current.style.transform = `translateX(${aboutElement.current.getBoundingClientRect().left}px)`
        }
        else if(e.target.classList.contains("projects")){
            projectsElement.current.firstElementChild.classList.add("fa-folder-open")
            previousElement = projectsElement.current
            nav.current.style.transform = `translateX(${projectsElement.current.getBoundingClientRect().left}px)`
        }
        else if(e.target.classList.contains("contact")){
            contactElement.current.firstElementChild.classList.add("fa-envelope-circle-check")
            previousElement = contactElement.current
            nav.current.style.transform = `translateX(${contactElement.current.getBoundingClientRect().left}px)`
        }
        else if(e.target.classList.contains("blog")){
            blogElement.current.firstElementChild.classList.add("fa-pen-to-square")
            previousElement = blogElement.current
            nav.current.style.transform = `translateX(${blogElement.current.getBoundingClientRect().left}px)`
        }
    }

   
    return (

    <div ref={navigation} className="navigation">

         <Link onClick={handleClick}  className="nav-item" to="/">
            <div  ref={homeElement}   className="home">
                <i className={houseIcon}></i>
                <p className='home'>Home</p>
            </div>
        </Link>

        <Link onClick={handleClick}  className='nav-item' to="/about">
            <div ref={aboutElement} className="about" >
                <i className={aboutIcon}></i>
                <p className='about'>About</p>
            </div>
        </Link>

        <Link onClick={handleClick} className='nav-item' to="/projects">
            <div  ref={projectsElement} className="projects">
                <i className={projectsIcon}></i>
                <p className='projects'>Projects</p>
                
            </div>
        </Link>

        <Link onClick={handleClick} className='nav-item' to="/contact">
            <div  ref={contactElement} className="contact">
                <i className={contactIcon}></i>
                <p className='contact'>Contact</p>
                
            </div>
        </Link>

        <Link onClick={handleClick} className='nav-item' to="/blog">
            <div  ref={blogElement} className="blog">
                <i className={blogIcon}></i>
                <p className='blog'>Blog</p>
            </div>
        </Link>
    </div>
  
    )
}



export default Navigation