import { useState } from "react"
import {BiMenu} from "react-icons/bi"
import { Link } from "react-router-dom"
import { navbar } from "../data/navbar"

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false)
    // eslint-disable-next-line
    const [links, setLinks] = useState(navbar)
    return (
        <>
            <div className="menu-btn">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <BiMenu />
                </button>
            </div>

                <header className={`${isOpen ? "header open" : 'header'}`}>
                <nav>
                    <ul>
                        {links.map((link) => {
                            const {id, title, url} = link
                            return (
                                <li key={id} onClick={() => setIsOpen(false)}>
                                    <Link to={url}>{title}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </header>

        </>
    )
}

export default Menu