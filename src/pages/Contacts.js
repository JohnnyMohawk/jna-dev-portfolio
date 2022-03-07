import { FaTwitter, FaEnvelope, FaPalette, FaLinkedin, FaRedditAlien, FaPhoneAlt } from "react-icons/fa"
import GooeyBG from "../components/Gooey"

const Contacts = () => {
    return (
        <>
            <section className="contacts" id="contact-page">
            <GooeyBG className="gooeyBg" />
                <h1 className="pageTitle">Contact Me</h1>
                <ul>
                    {/* <li><a href="tel:13129090134"><FaPhoneAlt /> 1  (312) 909 - 0134</a></li> */}
                    <li><a href="mailto:johnnelsonalden@gmail.com" target="_blank" rel="noopennernoreferrer">< FaEnvelope/> JohnNelsonAlden@gmail.com</a></li>
                    <li><a href="https://twitter.com/_JohnnyMohawk" target="_blank" rel="noopennernoreferrer"><FaTwitter /> Follow me @_JohnnyMohawk</a></li>
                    <li><a href="https://hashaxis.com/creator/JohnnyMohawk#onsale" target="_blank" rel="noopennernoreferrer"><FaPalette /> My NFT Art Gallery</a></li>
                    <li><a href="https://www.reddit.com/user/Johnny_Mohawk" target="_blank" rel="noopennernoreferrer"><FaRedditAlien /> Let's Discuss on Reddit</a></li>
                    <li><a href="https://www.linkedin.com/in/john-nelson-alden/" target="_blank" rel="noopennernoreferrer"><FaLinkedin /> Talk Shop on Linkedin</a></li>
                </ul>
            </section>
        </>
    )
}

export default Contacts