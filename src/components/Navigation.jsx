

import {useRef, useState} from 'react'
import {Link} from 'react-router-dom'
let previousElement;

function Navigation({nav}){

    window.onscroll = function() {
        if ((window.scrollY + window.innerHeight + 100) >= document.body.scrollHeight && window.location.toString().includes("projects")) {
            navigation.current.classList.add('slide-off')
        }
        else {
            navigation.current.classList.remove('slide-off')
        }
    };

    let [houseIcon, setHouseIcon] = useState("icon fa-solid fa-house fa-xl")
    let [aboutIcon, setAboutIcon] = useState("icon fa-solid fa-user fa-xl")
    let [projectsIcon, setProjectsIcon] = useState("icon fa-solid fa-folder fa-xl")
    let [contactIcon, setContactIcon] = useState("icon fa-solid fa-envelope fa-xl")
    let [blogIcon, setBlogIcon] = useState("icon fa-solid fa-pen fa-xl")

    let homeElement  = useRef()
    let aboutElement = useRef()
    let projectsElement = useRef()
    let contactElement = useRef()
    let blogElement = useRef()
    let navigation = useRef()

    function handleIconSwitch(){

        if(previousElement) {

            let updatedIcon;

            switch(previousElement) {
                case homeElement.current:
                  updatedIcon = houseIcon.replace("fa-house-chimney", "fa-house")
                  setHouseIcon(updatedIcon)
                  break;
    
                case aboutElement.current:
                  updatedIcon = aboutIcon.replace("fa-user-tie", "fa-user")
                  setAboutIcon(updatedIcon)
                  break;
    
                case projectsElement.current:
                  updatedIcon = projectsIcon.replace("fa-folder-open", "fa-folder")
                  setProjectsIcon(updatedIcon)
                  break;
    
                case contactElement.current:
                  updatedIcon = contactIcon.replace("fa-envelope-circle-check", "fa-envelope")
                  setContactIcon(updatedIcon)
                  break;
    
                case blogElement.current:
                  updatedIcon = blogIcon.replace("fa-pen-to-square", "fa-pen")
                  setBlogIcon(updatedIcon)
                  break;
                
                default:
                  // code block
              }
        }
    }

 
    function handleHomeClick() {
        handleIconSwitch()
        let onClickHomeIcon = "icon fa-solid fa-house-chimney fa-xl"
        setHouseIcon(onClickHomeIcon)
        previousElement = homeElement.current
        nav.current.style.transform = `translateX(${homeElement.current.parentElement.getBoundingClientRect().left}px)`
    }

    function handleAboutClick() {
        handleIconSwitch()
        let onClickAboutIcon = "icon fa-solid fa-user-tie fa-xl"
        setAboutIcon(onClickAboutIcon)
        previousElement = aboutElement.current
        nav.current.style.transform = `translateX(${aboutElement.current.parentElement.getBoundingClientRect().left}px)`
    }

    function handleProjectsClick() {
        handleIconSwitch()
        let onClickProjectsIcon = "icon fa-solid fa-folder-open fa-xl"
        setProjectsIcon(onClickProjectsIcon)
        previousElement = projectsElement.current
        nav.current.style.transform = `translateX(${projectsElement.current.parentElement.getBoundingClientRect().left}px)`
    }

    function handleContactClick() {
        handleIconSwitch()
        let onClickContactIcon = "icon fa-solid fa-envelope-circle-check fa-xl"
        setContactIcon(onClickContactIcon)
        previousElement = contactElement.current
        nav.current.style.transform = `translateX(${contactElement.current.parentElement.getBoundingClientRect().left}px)`
    }

    function handleBlogClick() {
        handleIconSwitch()
        let onClickBlogIcon = "icon fa-solid fa-pen-to-square fa-xl"
        setBlogIcon(onClickBlogIcon)
        previousElement = blogElement.current
        nav.current.style.transform = `translateX(${blogElement.current.parentElement.getBoundingClientRect().left}px)`
    }


    return (

    <div ref={navigation} className="navigation">
            <div className="nav-item">
                <Link onClick={handleHomeClick} className="cursor" to="/">
                    <i ref={homeElement} className={houseIcon}></i>
                    <p>Home</p>
                </Link>
            </div>
      
            <div className="nav-item" >
                <Link  onClick={handleAboutClick}  className='cursor' to="/about">
                    <i ref={aboutElement} className={aboutIcon}></i>
                    <p>About</p>
                </Link>
            </div>
     
            <div className="nav-item">
                <Link onClick={handleProjectsClick} className='cursor' to="/projects">
                    <i ref={projectsElement} className={projectsIcon}></i>
                    <p>Projects</p>
                </Link>
            </div>
       
            <div className="nav-item">
                <Link onClick={handleContactClick} className='cursor' to="/contact">
                    <i ref={contactElement} className={contactIcon}></i>
                    <p>Contact</p>
                </Link>
            </div>
      
            <div className="nav-item">
                <Link onClick={handleBlogClick} className='cursor' to="/blog">
                    <i  ref={blogElement} className={blogIcon}></i>
                    <p>Blog</p>
                </Link>
            </div>
    </div>
  
    )
}



export default Navigation