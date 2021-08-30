import { FaPhoneAlt, FaEnvelope } from "react-icons/fa"

const Contacts = () => {
    return (
        <>
            <section className="contacts" id="contact-page">
                <h1>Contact Me</h1>
                <ul>
                    <li><a href="tel:13129090134"><FaPhoneAlt /> 1  (312) 909 - 0134</a></li>
                    <li><a href="mailto:johnnelsonalden@gmail.com">< FaEnvelope/> JohnNelsonAlden@gmail.com</a></li>
                </ul>
            </section>
        </>
    )
}

export default Contacts