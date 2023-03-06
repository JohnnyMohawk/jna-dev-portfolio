import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { navbar } from "../data/navbar"
import './menu.css'
import { ABI } from "../data/abi.js"

const ADDRESS = "0xA7019ABE06Ad1De7d302CB995AfFBFb2797d1E6c";

const Web3 = require('web3');
const web3 = new Web3('https://goerli.infura.io/v3/fd6787e9445f4def9e51f383286de2e5');
var contract = new web3.eth.Contract(ABI, ADDRESS);


const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    // eslint-disable-next-line
    const [links, setLinks] = useState(navbar);
    const navigate = useNavigate();

    const checkWallet = async () => {
        const { ethereum } = window;
        if (!ethereum) {
            alert('Please install MetaMask Browser Extension to access this section');
        }
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Found an account! Address:", accounts[0]);
            navigate('/mint');
        } catch (error) {
            console.log(error)
        }
    }

    const checkTokens = async () => {
        const { ethereum } = window;
        if (!ethereum) {
            alert('Please install MetaMask Browser Extension to access this section');
        }
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Found an account! Address:", accounts[0])
            let balance = Number(await contract.methods.balanceOf(accounts[0]).call());
            console.log("Token Balance: ", balance);
            if (balance === 0 || balance < 0) {
                alert('You do not have any Johnny Mohawk Key tokens required to access this section. Click the mint link to create your key!');
            } else if (balance > 0) {
                navigate('/token-gated');
            }
        } catch (error) {
            console.log(error)
        }
    }

    const weirdAILink = async () => {
        const { ethereum } = window;
        if (!ethereum) {
            alert('Please install MetaMask Browser Extension to access this section');
        }
        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Found an account! Address:", accounts[0])
            let balance = Number(await contract.methods.balanceOf(accounts[0]).call());
            console.log("Token Balance: ", balance);
            if (balance === 0 || balance < 0) {
                alert('You do not have any Johnny Mohawk Key tokens required to access this section. Click the mint link to create your key!');
            } else if (balance > 0) {
                navigate('/weird-ai');
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="menu-btn">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <img className="icons" alt="hamburger icon" src="./images/hamburger-icon.png" />
                </button>
            </div>

                <header className={`${isOpen ? "header open" : 'header'}`}>
                <nav>
                    <ul id="nav-menu">
                        {links.map((link) => {
                            const {id, title, url} = link
                            return (
                                <li key={id} onClick={() => setIsOpen(false)}>
                                    <Link to={url}>{title}</Link>
                                </li>
                            )
                        })}
                        <li id="web3" onClick={() => {
                            navigate('/blog')
                            setIsOpen(false)}}>Blog</li>
                        <p id="w3line">Web3</p>
                        <li id="web3" onClick={() => {
                            checkWallet() 
                            setIsOpen(false)}}>
                            Mint
                        </li>
                        <li id="web3" onClick={() => {
                            checkTokens()
                            setIsOpen(false)}}>
                            Unlock
                        </li>
                        <li id="web3" onClick={() => {
                            weirdAILink()
                            setIsOpen(false)}}>
                            Weird AI
                        </li>
                    </ul>
                </nav>
            </header>

        </>
    )
}

export default Menu