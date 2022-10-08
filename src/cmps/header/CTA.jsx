import CV from '../../assets/cv.pdf'

export const CTA = () => {
    return <div className="cta flex">
        <a className="btn" href={CV} download>Download CV</a>
        <a className="btn btn-primary" href="#contact">Let's Talk</a>

    </div>
}