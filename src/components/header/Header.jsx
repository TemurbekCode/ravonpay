import "./Header.scss"

function Header() {

    return (
        <div className="header">
            <div className="leftHead">

                <div className="texts">
                    <div className="live">
                        <div className="sircle"></div>
                        🇺🇿 Built for Central Asia
                    </div>
                    <h1 className="glob-clas">Get paid globally.</h1>
                    <h1 className="glob-clas2">No barriers.</h1><br />
                    <p>The simplest way for Uzbek freelancers, dropshippers, and remote workers to receive international payments — without the confusion.</p><br />
                    <div className="bnsCont">
                        <button className="btn1-cont">Start for free →</button>
                        <button className="btn2-cont">▶  See how it works</button>
                    </div><br />

                    <div className="countContainer">
                        <div className="conut1">
                            <b>100K+</b>
                            <p>Freelancers in Uzbekistan</p>
                        </div>
                        <div className="conut2">
                            <b>Fast</b>
                            <p>Setup in minutes</p>
                        </div>
                        <div className="conut3">
                            <b>Simple</b>
                            <p>No experience needed</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="rightHead">
                <div className="topBadge">
                    🤖 Best route found
                </div>

                <div className="mainCard">
                    <div className="blurCard"></div>

                    <div className="cardContent">
                        <div className="topRow">
                            <div>
                                <p className="smallText">Incoming payment</p>
                                <h1>$1,240</h1>
                                <p className="currency">US Dollar → Uzbek Sum</p>
                            </div>

                            <div className="status">
                                <span className="dot"></span>
                                Processing
                            </div>
                        </div>

                        <div className="progressBar">
                            <div className="progress"></div>
                        </div>

                        <div className="bottomRow">
                            <div>
                                <p className="label">From: Upwork</p>
                                <span>via Payoneer</span>
                            </div>

                            <div className="arrow">→</div>

                            <div>
                                <p className="label">To: Your account</p>
                                <span>UZ</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bottomBadge">
                    ✓ Payment received
                </div>
            </div>
        </div>
    )
}

export default Header;