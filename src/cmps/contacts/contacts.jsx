import { useRef } from "react"
import { ContactMain } from "./contact-main"
import { ContactForm } from './form'
import emailjs from 'emailjs-com'

export const Contacts = () => {
    const form = useRef()
    
    
    const sendEmail = async (ev) => {
        ev.preventDefault()
        try {
            const res = await emailjs.sendForm('service_ty4hd0l', 'template_ft6whqk', form.current, 'VfPdcZyI6JDFlNywQ')
            console.log(res)
        } catch (err) {
            console.log(err)
        }
        ev.target.reset()
    }
    return <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>
        <div className="container contact-container">
            <ContactMain />
            <ContactForm form={form} sendEmail={sendEmail} />
        </div>
    </section>
}