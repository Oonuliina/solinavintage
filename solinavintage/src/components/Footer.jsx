import React from "react";
import { FacebookLogo, Envelope, InstagramLogo } from "@phosphor-icons/react";

import './footer.css';


export default function Footer() {
    return (
        <div className="footer">
            <div className="footerInfo">
                <div classname="links">
                    <h2>Linkkejä</h2>
                    <p>Tietoa meistä</p>
                    <p>Toimitusehdot</p>
                    <p>Tietosuojakäytännöt</p>
                    <p>Laita meille viestiä</p>
                </div>
                <div className="contact">
                    <h2>Yhteystiedot</h2>
                    <p>Sähköposti: <br></br>
                    info@solinavintage.fi</p>
                    <p>Puhelin: 050 012 3456</p>
                </div>
                <div className="payment">
                    <h2>Maksutavat</h2>
                    <p>logoja</p>
                </div>
            </div>
                <div className="socialCopyr">
                    <div className="socialLogos">
                        <FacebookLogo size={32} weight="light" />
                        <Envelope size={32} weight="light" />
                        <InstagramLogo size={32} weight="light" />
                    </div>
                    <div className="copyright">
                        <p>© 2023 Solina Vintage Oy</p>
                    </div>
                </div>
        </div>

    )
}