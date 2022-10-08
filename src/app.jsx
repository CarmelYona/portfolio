import { Header } from "./cmps/header/header"
import { Nav } from "./cmps/nav/nav"
import { About } from "./cmps/about/about"
import { Experience } from "./cmps/experience/experience"
import { Services } from "./cmps/services/services"
import { Portfolio } from "./cmps/portfolio/portfolio"
import { Testimonials } from "./cmps/testimonials/testimonials"
import { Contacts } from "./cmps/contacts/contacts"
import { Footer } from "./cmps/footer/footer"
console.log('hi')

export function App() {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Testimonials />
            <Contacts />
            <Footer />
        </>
    )
}