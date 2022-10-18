import { BiCheck } from 'react-icons/bi'

export const Services = () => {
    return <section id="services">
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container services-container">

            <article className="service">
                <div className="service-header">
                    <h3>UI/UX Design</h3>
                </div>
                <ul className="service-list clean-list">
                    <li>
                        <BiCheck className="service-list-icon" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                        <BiCheck className="service-list-icon" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                        <BiCheck className="service-list-icon" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                        <BiCheck className="service-list-icon" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                        <BiCheck className="service-list-icon" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </li>
                </ul>
            </article>
            {/* END OF UX/UI DESIGN */}

            <article className="service">
                <div className="service-header">
                    <h3>Web Development</h3>
                </div>
                <ul className="service-list clean-list">
                    <li>
                        <BiCheck className="service-list-icon" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                        <BiCheck className="service-list-icon" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                        <BiCheck className="service-list-icon" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                        <BiCheck className="service-list-icon" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                        <BiCheck className="service-list-icon" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </li>
                </ul>
            </article>
            {/* END OF WEB DEVELOPMENT */}

            <article className="service">
                <div className="service-header">
                    <h3>Content Creation</h3>
                </div>
                <ul className="service-list clean-list">
                    <li>
                        <BiCheck className="service-list-icon" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                        <BiCheck className="service-list-icon" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                        <BiCheck className="service-list-icon" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                        <BiCheck className="service-list-icon" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </li>
                    <li>
                        <BiCheck className="service-list-icon" />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </li>
                </ul>
            </article>
            {/* END OF CONTENT CREATION */}
        </div>
    </section>
}