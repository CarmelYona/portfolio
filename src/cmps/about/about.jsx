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
                            <h5>Cllients</h5>
                            <small>200+ Worlwide</small>
                        </article>
                        <article className="about-card">
                            <VscFolderLibrary className="about-icon" />
                            <h5>Projects</h5>
                            <small>10+ Completed</small>
                        </article>
                    </div>

                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit laudantium commodi ducimus minus voluptatem perspiciatis laboriosam maiores non cum, cumque, atque maxime. Suscipit impedit velit reiciendis odio omnis, autem rem!
                    </p>

                    <a href="#contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
    </section>
}