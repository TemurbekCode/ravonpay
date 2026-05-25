import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [freelancerOpen, setFreelancerOpen] = useState(false);
    const [businessOpen, setBusinessOpen] = useState(false);
    const [langOpen, setLangOpen] = useState(false);

    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    const closeAll = () => {
        setMenuOpen(false);
        setFreelancerOpen(false);
        setBusinessOpen(false);
        setLangOpen(false);
    };

    const changeLang = (lang) => {
        i18n.changeLanguage(lang);
        closeAll();
    };

    return (
        <div className="nav">
            <div className="navContainer">

                {/* LOGO */}
                <Link className="logoLink" to="/" onClick={closeAll}>
                    <img src="/logoRM.png" className="logoRavon" alt="logo" />

                    <div className="logoText">
                        <h2>Ravon</h2>
                        <p>PAY</p>
                    </div>
                </Link>

                {/* LINKS */}
                <div className={`nav-links ${menuOpen ? "active" : ""}`}>

                    {/* Freelancers */}
                    <div
                        className="dropdown"
                        onMouseEnter={() => setFreelancerOpen(true)}
                        onMouseLeave={() => setFreelancerOpen(false)}
                    >
                        <button className="nav-link dropdown-btn">
                            {t("freelancers")}
                        </button>

                        <div className={`megaMenu ${freelancerOpen ? "show" : ""}`}>
                            <h4>FOR FREELANCERS</h4>

                            <div className="megaGrid">

                                <div className="megaItem">
                                    <div className="iconBox">💳</div>

                                    <div>
                                        <h5>Get paid by clients</h5>
                                        <p>Receive from anywhere</p>
                                    </div>
                                </div>

                                <div className="megaItem">
                                    <div className="iconBox">🌐</div>

                                    <div>
                                        <h5>Get paid by platforms</h5>
                                        <p>Upwork, Fiverr and more</p>
                                    </div>
                                </div>

                                <div className="megaItem">
                                    <div className="iconBox">🏦</div>

                                    <div>
                                        <h5>Withdraw to bank</h5>
                                        <p>To your Uzbek bank</p>
                                    </div>
                                </div>

                                <div className="megaItem">
                                    <div className="iconBox">🤖</div>

                                    <div>
                                        <h5>AI Adviser</h5>
                                        <p>Find the best method for you</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* BUSINESS */}
                    <div
                        className="dropdown"
                        onMouseEnter={() => setBusinessOpen(true)}
                        onMouseLeave={() => setBusinessOpen(false)}
                    >
                        <button className="nav-link dropdown-btn">
                            {t("business")}
                        </button>

                        <div className={`megaMenu ${businessOpen ? "show" : ""}`}>
                            <h4>FOR BUSINESS</h4>

                            <div className="megaGrid">

                                <div className="megaItem">
                                    <div className="iconBox">📦</div>

                                    <div>
                                        <h5>For Dropshippers</h5>
                                        <p>Pay suppliers, receive revenue</p>
                                    </div>
                                </div>

                                <div className="megaItem">
                                    <div className="iconBox">💼</div>

                                    <div>
                                        <h5>Manage payments</h5>
                                        <p>All payments in one place</p>
                                    </div>
                                </div>

                                <div className="megaItem">
                                    <div className="iconBox">🌍</div>

                                    <div>
                                        <h5>International transfers</h5>
                                        <p>Send money globally, fast</p>
                                    </div>
                                </div>

                                <div className="megaItem">
                                    <div className="iconBox">📊</div>

                                    <div>
                                        <h5>Payment analytics</h5>
                                        <p>Track your cash flow</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <Link to="/aboutUs" className="nav-link" onClick={closeAll}>
                        {t("aboutUs")}
                    </Link>

                    <Link to="/howitworks" className="nav-link" onClick={closeAll}>
                        {t("howitworks")}
                    </Link>

                    <Link to="/contact" className="nav-link" onClick={closeAll}>
                        {t("contact")}
                    </Link>

                    {/* MOBILE */}
                    <div className="nav-right-mobile">

                        <div className="langDropdown">
                            <button
                                className="langBtn"
                                onClick={() => setLangOpen(!langOpen)}
                            >
                                🌐 {currentLang.toUpperCase()}
                            </button>

                            <div className={`langMenu ${langOpen ? "show" : ""}`}>
                                <button onClick={() => changeLang("uz")}>
                                    uz O'zbek
                                </button>

                                <button onClick={() => changeLang("en")}>
                                    GB English
                                </button>
                            </div>
                        </div>

                        <button className="quoteBTN1">
                            {t("login")}
                        </button>

                        <button className="quoteBTN2">
                            {t("getstarted")}
                        </button>
                    </div>
                </div>

                {/* DESKTOP RIGHT */}
                <div className="nav-right-desktop">

                    <div className="langDropdown">
                        <button
                            className="langBtn"
                            onClick={() => setLangOpen(!langOpen)}
                        >
                            🌐 {currentLang.toUpperCase()}
                        </button>

                        <div className={`langMenu ${langOpen ? "show" : ""}`}>
                            <button onClick={() => changeLang("uz")}>
                                uz O'zbek
                            </button>

                            <button onClick={() => changeLang("en")}>
                                GB English
                            </button>
                        </div>
                    </div>

                    <button className="quoteBTN1">
                        {t("login")}
                    </button>

                    <button className="quoteBTN2">
                        {t("getstarted")} 
                    </button>
                </div>

                {/* BURGER */}
                <div
                    className={`burger ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>
        </div>
    );
}

export default Navbar;