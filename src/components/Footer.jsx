


function Footer(){

    function topFunction() {
        // document.body.scrollTop = 0;
        // document.documentElement.scrollTop = 0;

        window.scrollTo({top: 0, behavior: 'smooth'});
      }


    return (
        <footer className="footer">
            <div onClick={topFunction} className="footer-circle">
            <i className="footer-icon fa-solid fa-chevron-up fa-3x"></i>

            
            </div>

            <div className="block-circle"></div>

            {/* <div className="footer"></div>
            <div className="footer-circle"></div> */}
           





        </footer>
    )
    
    
}

export default Footer