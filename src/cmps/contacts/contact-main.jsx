import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

export const ContactMain = () => {
    return <div className="contact-options flex column">
        <article className="contact-option">
            <MdOutlineEmail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>carmelyona26@gmail.com</h5>
            <a href="mailto:carmelyona26@gmail.com" target="_blank">Send a message</a>
        </article>
        <article className="contact-option">
            <RiMessengerLine className="contact-option-icon" />
            <h4>Messenger</h4>
            <h5>Carmel Yona</h5>
            <a href="https://m.me/carmel.yona" target="_blank">Send a message</a>
        </article>
        <article className="contact-option">
            <BsWhatsapp className="contact-option-icon" />
            <h4>WhatsApp</h4>
            <h5>+972507441031</h5>
            <a href="https://api.whatsapp.com/send?phone=0507441331" target="_blank">Send a message</a>
        </article>
    </div>

}