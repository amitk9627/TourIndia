import React from 'react'
import './FooterStyles.css';


const Footer = () => {
    return (
        <div className='footer'>
            <div className='footerTop'>  {/*flex space-between*/}
                <div className='footerTop-logo'>
                    <h1>Tour India</h1>
                    <p>Choose your Favourite destination</p>
                </div>


                <div className='logo'>
                    <a href="#"> <i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i> </a>          
                    <a href="#"><i class="fa-brands fa-behance"></i></a>
                    <a href="#"> <i class="fa-brands fa-twitter"></i></a>
                </div>

            </div>


            <div className='footerButtom'>

                <div>
                    <h4>Project</h4>
                    <a href="#">Change Log</a>
                    <a href="#">Status</a>
                    <a href="#">Licence</a>
                    <a href="#">All Versions</a>
                </div>

                <div>
                    <h4>Community</h4>
                    <a href="#">Github</a>
                    <a href="#">Issues</a>
                    <a href="#">Project</a>
                    <a href="#">twitter</a>
                </div>

                <div>
                    <h4>Help</h4>
                    <a href="#">Contact us</a>
                    <a href="#">Support</a>
                    <a href="#">Troubleshooting</a>
                    
                </div>

                <div>
                    <h4>Others</h4>
                    <a href="#">Service</a>
                    <a href="#">pravicy policy</a>
                   
                    <a href="#">License</a>
                </div>

            </div>
        </div>
    )
}
export default Footer