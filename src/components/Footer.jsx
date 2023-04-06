import {useInView} from "react-intersection-observer"


function Footer(){

    let {ref: footerRef, inView: footerIsVisible} = useInView()

    function topFunction() {
        window.scrollTo({top: 0, behavior: 'smooth'});
      }


    return (
        <footer ref={footerRef} className="footer">
            <div onClick={topFunction} className={`footer-circle ${footerIsVisible && "footer-up"}`}>
            <i className="footer-icon fa-solid fa-chevron-up fa-3x"></i>

            
            </div>

            <div className="block-circle"></div>

            {/* <div className="footer"></div>
            <div className="footer-circle"></div> */}
           





        </footer>
    )
    
    
}

export default Footer