import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'

export const Footer = () => {
    return <footer>
        <a href="#" className="footer-logo">CARMEL YONA</a>
        <ul className="permalinks clean-list flex">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#protfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="footer-socials flex">
            <a href="https://www.facebook.com/carmel.yona/"><FaFacebookF /></a>
            <a href="https://www.instagram.com/carmelyona/"><FiInstagram /></a>
            <a href="https://www.linkedin.com/in/carmelyona/"><BsLinkedin /></a>
            <a href="https://github.com/CarmelYona" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
        </div>

        <div className="footer-copyright">
            <small>&copy; Carmel Yona. All rights reserved.</small>
        </div>
    </footer>
}