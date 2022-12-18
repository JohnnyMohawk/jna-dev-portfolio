import {FaPlay, FaPause} from "react-icons/fa"
import {useState, useEffect, useRef} from "react"
import { Link, useNavigate } from "react-router-dom"
import './tokens.css'
import { ABI } from "../data/abi.js"

import useAudio from "../components/AudioButton";

const ADDRESS = "0xA7019ABE06Ad1De7d302CB995AfFBFb2797d1E6c";

const Web3 = require('web3');
const web3 = new Web3('https://goerli.infura.io/v3/fd6787e9445f4def9e51f383286de2e5');
var contract = new web3.eth.Contract(ABI, ADDRESS);


const Tokens = () => {
    const userPageResponse = () => {
        if(window.innerWidth >= 500){
            window.location.reload()
        }else if(window.innerWidth <= 500){
            window.location.reload()
        }
    }

    window.addEventListener('resize', userPageResponse);

    const audioURL = "./audio/Johnny-Coolman.mp3";
    const navigate = useNavigate();
    const [hasToken, setHasToken] = useState(false);
    const [playing, currentTime, play, pause, jump] = useAudio(audioURL);

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
            if (balance > 0) {
                setHasToken(true);
            }
        } catch (error) {
            console.log(error)
        }
    };

    const visitMint = () => {
        window.open('https://johnnymohawknft.netlify.app/','_blank');
    };
        
    useEffect(() => {
        checkTokens();
    }, []);

    return window.innerWidth >= 500 ? (
        <>
            {hasToken ? (
                <>
                    <section className="homepage" id="tokenWrap">
                        <div className="overlay">
                            <video className='bgVid' src="./images/TokenGatedVideo720.mp4" autoPlay loop muted />
                            <button id="pausePlay" onClick={playing ? pause : play}>
                                {playing ? <FaPause /> : <FaPlay />}
                            </button>
                            <button id="hitMeUp" onClick={() => navigate('/contact-me')}>Hit Me Up</button>
                        </div>
                    </section>
                </>) : (
                <>
                    <section className="homepage" id="tokenWrap">
                        <div className="overlay">
                            <p id="noTokens">You do not have any Johnny Mohawk Key tokens required to access this section. <br/><br/>Click the mint link to create your key!</p>
                            <button id="mintButton" onClick={visitMint}>Mint</button>
                        </div>
                    </section>
                </>
                ) 
            }
        </>
    ) : (
        <>
            {hasToken ? (
                <>
                    <section className="homepage">
                        <div className="overlay">
                        <img className="mobile-bg" src="./images/bwbillseyes.jpg" />
                        </div>
                    </section>
                </>) : (<></>) 
            }    
        </>
    )
}

export default Tokens