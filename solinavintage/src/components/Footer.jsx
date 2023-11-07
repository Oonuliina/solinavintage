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
                    <div className="linksBox">
                        <h1 className="linksTitle">Linkkejä</h1>
                        <ul className="linksList">
                            <li className="linkItem">Tietoa meistä</li>
                            <li className="linkItem">Tietoa meistä</li>
                            <li className="linkItem">Toimitusehdot</li>
                            <li className="linkItem">Tietosuojakäytännöt</li>
                            <li className="linkItem">Laita meille viestiä</li>
                        </ul>
                    </div>
                </div>
                <div className="footerInfoCenter">
                    <div className="contactBox">
                        <h1 className="contactTitle">Yhteystiedot</h1>
                        <p>Sähköposti: info@solinavintage.fi</p>
                        <p>Puhelin: 050 012 3456</p>
                        <p>Osoite: Vintagekatu 3, 00100 Helsinki</p>
                    </div>
                </div>
                <div className="footerInfoRight">
                    <div className="paymentLogos">
                    <h1 className="paymentTitle">Maksutavat</h1>
                        <div className="paymentImages">
                            <div className="bigLogo">
                                <img className="bLogo" src={paytrail} alt='Paytrail logo' />
                            </div>
                            <div className="smallLogos">
                                <img className="sLogo" src={mobilepay} alt='Mobilepay logo' />
                                <img className="sLogo" src={siirto} alt='Siirto logo' />
                                <img className="sLogo" src={pivo} alt='Pivo logo' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerBot">  
                <div className="socialContainer">
                    <ul className="socialList">
                        <li className="socialListItem"><FacebookLogo className="socialLogo" size={32} weight="light" /></li>
                        <li className="socialListItem"><Envelope className="socialLogo" size={32} weight="light" /></li>
                        <li className="socialListItem"><InstagramLogo className="socialLogo" size={32} weight="light" /></li>
                    </ul>
                </div> 
                <div className="copyright">
                        <p>© 2023 Solina Vintage Oy</p>
                </div>
            </div>

        </div>

    )
}