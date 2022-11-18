import { MdDone } from 'react-icons/md'

export const ContactForm = (props) => {
    const { form, sendEmail, className } = props
    return <form onSubmit={sendEmail} ref={form} className="flex column">
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
        <button type="submit" className={'btn btn-primary'}>Send Message </button>
        {/* <button type="submit" className={'btn ' + className}>Send Message <MdDone className="icon" /></button> */}
    </form>
}