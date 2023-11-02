import React from "react";
import { FacebookLogo, Envelope, InstagramLogo } from "@phosphor-icons/react";
import paytrail from '../assets/paytrailLogo.png'
import siirto from '../assets/SiirtoLogo.png';
import mobilepay from '../assets/mobilepayLogo.png'
import pivo from '../assets/pivoLogo.png';
import './footer.css';


export default function Footer() {
    return (
        <div className="footer">
            <hr className="footerSeparator" />
            <div className="footerInfo">
                <div className="footerInfoLeft">
                    <h2>Linkkejä</h2>
                    <ul>
                    <li>Tietoa meistä</li>
                    <li>Toimitusehdot</li>
                    <li>Tietosuojakäytännöt</li>
                    <li>Laita meille viestiä</li>
                    </ul>
                </div>
                <div className="footerInfoCenter">
                    <h2>Yhteystiedot</h2>
                    <p>Sähköposti: <br></br>
                    info@solinavintage.fi</p>
                    <p>Puhelin: 050 012 3456</p>
                </div>
                <div className="footerInfoRight row">
                    <h2>Maksutavat</h2>
                    <div className="column">
                    <img src={paytrail} alt='Paytrail logo' />
                    </div>
                    <div className="column">
                    <img src={mobilepay} alt='Mobilepay logo' />
                    <img src={siirto} alt='Siirto logo' />
                    <img src={pivo} alt='Pivo logo' />
                    </div>
                </div>
            </div>
                    <div className="socialLogos">
                        <FacebookLogo size={32} weight="light" />
                        <Envelope size={32} weight="light" />
                        <InstagramLogo size={32} weight="light" />
                    </div>
                    <div className="copyright">
                        <p>© 2023 Solina Vintage Oy</p>
                    </div>
        </div>

    )
}