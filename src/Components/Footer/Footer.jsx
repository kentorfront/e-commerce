import { Link } from "react-router-dom";
import { HiMail } from "react-icons/hi";
import './Footer.css'

export default function Footer(){
    return(
        <footer>
            <div className="footer-wrapper">
                <div className="cardNews">
                    <div className="cardNews-left">STAY UPTO DATE ABOUT <br /> OUR LATEST OFFERS</div>
                    <div className="cardNews-right">
                        <div className="email-input">
                            <HiMail className="email-icon"/>
                            <input type="email" name="email" id="email-input" placeholder="Enter your email address"/>
                        </div>
                        <button className="submit-email-button">Subscribe to Newsletter</button >
                    </div>
                </div>
                <div className="footer">
                    <div className="footer-top">
                        <div className="column1">
                            <div className="logo"></div>
                            <div className="aboutUs">We have clothes that suits your style and <br /> which you’re proud to wear. From women <br /> to men.</div>
                            <div className="socials">
                                <div className="twitter"></div>
                                <div className="facebook"></div>
                                <div className="instagram"></div>
                                <div className="github"></div>
                            </div>
                        </div>
                        <div className="column2 column">
                            <div className="column-title">COMPANY</div>
                            <Link>Placeholder</Link>
                            <Link>Placeholder</Link>
                            <Link>Placeholder</Link>
                            <Link>Placeholder</Link>
                        </div>
                        <div className="column3 column">
                            <div className="column-title">HELP</div>
                            <Link>Placeholder</Link>
                            <Link>Placeholder</Link>
                            <Link>Placeholder</Link>
                            <Link>Placeholder</Link>
                        </div>
                        <div className="column4 column">
                            <div className="column-title">FAQ</div>
                            <Link>Placeholder</Link>
                            <Link>Placeholder</Link>
                            <Link>Placeholder</Link>
                            <Link>Placeholder</Link>
                        </div>
                        <div className="column5 column">
                            <div className="column-title">RESOURCES</div>
                            <Link>Placeholder</Link>
                            <Link>Placeholder</Link>
                            <Link>Placeholder</Link>
                            <Link>Placeholder</Link>
                        </div>
                    </div>
                    <div className="footer-line"></div>
                    <div className="footer-bottom">
                        <div className="footer-bottom-left">
                            Shop.co © 2000-2023, All Rights Reserved
                        </div>
                        <div className="footer-right">
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}