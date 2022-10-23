import Me2 from '../../assets/img/me2.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'


export const About = () => {
    return <section className="about" id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="container about-container">
            <div className="about-me">
                <div className="about-me-img">
                    <img src={Me2} alt="About Image" />
                </div>
            </div>

            <div className="about-content">
                <div className="about-cards">
                    <article className="about-card">
                        <FaAward className="about-icon" />
                        <h5>Experience</h5>
                        <small>Junior</small>
                    </article>
                    <article className="about-card">
                        <FiUsers className="about-icon" />
                        <h5>Volunteer</h5>
                        <small>3 Months As Fullstack</small>
                    </article>
                    <article className="about-card">
                        <VscFolderLibrary className="about-icon" />
                        <h5>Projects</h5>
                        <small>10+ Completed</small>
                    </article>
                </div>

                <p>
                    Fullstack / Frontend Web Developer, specializing in single page applications using the latest Web technologies, Node.js (express), React.js, CSS (SASS), HTML5. <br />

                    Graduate of the BEST academy, Coding Academy ⭐. <br />
                    Up to 640 intensive and pure fun hours of coding bootcamp qualifies Full-Stack Developers. <br />

                    I have passion for software and learning new tools and technologies and I will be happy to hear about other roles also. <br />
                </p>

                <a href="#contact" className="btn btn-primary">Let's Talk</a>
            </div>
        </div>
    </section>
}