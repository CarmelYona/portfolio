import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

export const Footer = () => {
    return <footer>
        <a href="#" className="footer-logo">CARMEL</a>
        <ul className="permalinks clean-list flex">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer-socials flex">
            <a href="https://www.facebook.com/carmel.yona/"><FaFacebookF /></a>
            <a href="https://www.instagram.com/carmelyona/"><FiInstagram /></a>
        </div>

        <div className="footer-copyright">
            <small>&copy; Carmel Yona. All rights reserved.</small>
        </div>
    </footer>
}