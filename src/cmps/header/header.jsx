import { CTA } from "./CTA"
import { HeaderSocials } from "./header-socials"
import Me from "../../assets/img/me.png"


export function Header() {
    return <header>
        <div className="container header-container">

            <h5>Hello I'm</h5>
            <h1>Carmel Yona</h1>
            <h5 className="text-light">Fullstack Developer </h5>
            <CTA />
            <HeaderSocials />
            <div className="me">
                <img src={Me} alt="me" />
            </div>
            <a href="#contact" className="scroll-down">Scroll Down</a>
        </div>
    </header>
}