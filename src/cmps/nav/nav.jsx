import { useState } from 'react'
import { FacebookButton } from 'react-social'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { TbMessageCircle } from 'react-icons/tb'
import { FiShare } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { BsLinkedin } from 'react-icons/bs'



export const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    const [activeShare, setActiveShare] = useState(false)


    return <nav className="flex">
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
        <a href="#about" onClick={() => setActiveNav('about')} className={activeNav === 'about' ? 'active' : ''}><AiOutlineUser /></a>
        <a href="#experience" onClick={() => setActiveNav('experience')} className={activeNav === 'experience' ? 'active' : ''}><BiBook /></a>
        <a href="#contact" onClick={() => setActiveNav('contact')} className={activeNav === 'contact' ? 'active' : ''}><TbMessageCircle /></a>
        <div onClick={() => setActiveShare(!activeShare)} className={activeShare === true ? 'share share-active active' : 'share'}>
            <div className='share-wrapper flex'>
                {activeShare ? <AiOutlineClose /> : <FiShare className='share-icon' />}
                <>
                    <a href="https://github.com/CarmelYona" className="btn-share btn-share-git" target="_blank"><BsGithub /></a>
                    {/* <FacebookButton url="https://www.facebook.com/carmel.yona/" appId="515026037143515" className="btn-share btn-share-face" target="_blank"><FaFacebookF /></FacebookButton> */}
                    <a href="https://www.facebook.com/carmel.yona/" className="btn-share btn-share-face" target="_blank"><FaFacebookF /></a>
                    <a href="https://www.linkedin.com/in/carmelyona/" className="btn-share btn-share-li" target="_blank"><BsLinkedin /></a>
                </>
            </div>
        </div>

    </nav >
}