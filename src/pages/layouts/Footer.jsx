import React from 'react';

const Footer = () => {
    return ( 
        <footer className='mt-5'>
            <div>
                <ul className='d-flex align-items-end justify-content-around list-unstyled lista'>
                    <li className='d-flex align-items-center'>
                        <a href="#">Principal</a>
                    </li>
                    <li className='d-flex align-items-center'>
                        <a href="#">Trips</a>
                    </li>
                    <li className='d-flex align-items-center'>
                        <a href="#">History</a>
                    </li>
                </ul>
            </div>
        </footer>
     );
}
 
export default Footer;