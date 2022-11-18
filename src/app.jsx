import { Header } from "./cmps/header/header"
import { Nav } from "./cmps/nav/nav"
import { About } from "./cmps/about/about"
import { Experience } from "./cmps/experience/experience"
import { Portfolio } from "./cmps/portfolio/portfolio"
import { Contacts } from "./cmps/contacts/contacts"
import { Footer } from "./cmps/footer/footer"
import { Review } from "./cmps/review/review"

export function App() {
    return (
        <>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Portfolio />
            <Contacts />
            <Review />
            <Footer />
        </>
    )
}