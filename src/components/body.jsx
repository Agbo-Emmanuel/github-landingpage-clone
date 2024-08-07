import React from "react";
import "./style.css";
import icon from "./img/desktop-icon.svg";
import section4img from "./img/section4img.jpg"
import Section from "./section"
import section5img from "./img/compimg1.png";
import section6img from "./img/compimg2.png";
import section7img from "./img/compimg3.png";
import imageicon from "./img/githubimageicon.svg";
import extensive from "./img/githubextensiveicon.svg";
import contact from "./img/githubcontacticon.svg";





const Body = ()=>{
    return(
        <>
            <div className="body">
                <div className="section1">
                    <div className="icon">
                        <img src={icon} alt="" />
                    </div>
                    <div className="sec1text">
                       <nav>Overview</nav> 
                       <ul>Release Notes</ul>
                       <ul>Help</ul>
                    </div>
                </div>

                <div className="section2">
                    <div className="section2head">
                        <h1 className="head">GitHub Desktop</h1>
                    </div>
                    <p>Focus on what matters instead of fighting with Git. Whether you're new to Git or a seasoned user, GitHub Desktop simplifies your development workflow.</p>
                    <button>Download for Windows (64bit)</button>
                </div>

                <div className="section3">
                    <div className="menutext">
                        <div className="menus">
                            <nav><h1>Feeling brave?</h1><p>Try new features in the <span>Beta Channel</span> before they're released.</p></nav>    
                        </div>
                        <div className="menus">
                            <nav><h1>Prefer the MSI?</h1><p>Download for<span>Windows (MSI)</span></p></nav>   
                        </div>
                        <div className="menus">
                            <nav><h1>macOS?</h1><p>Download for <span>macOS</span></p></nav>    
                        </div>
                    </div>
                    <div className="linktext">
                        <nav><p>By downloading, you agree to the <span>Open Source Applications Terms.</span></p></nav>
                    </div>
                </div>

                <div className="section4">
                    <div className="section4img">
                        <img src={section4img} alt="" />
                    </div>
                </div>
                <Section 
                img={section5img}
                h1="Attribute Commits With Collaborators easily"
                p="Quickly add co-authors to your commit. Great for pairing and excellent for sending a little love/credit to that special someone who helped fix that gnarly bug of yours. See the attribution on the history page, undo an accidental attribution and"
                span="see the co-authors on github.com"
                />
                <Section 
                img={section6img} direction="row-reverse"
                h1="Checkout branches with pull requests and view CI statuses"
                p="see all open pull request for your respositories and check them out as if they were a local branch, even if they're not from upstream branches or forks. See which pull requests pass commit status checks, too!"
                />
                <Section 
                img={section7img}
                h1="Syntax highlighted diffs"
                p="The new GitHub Destop supports syntax highlighting when viewing diffs for a variety of different languages."
                />

                <div className="section8">
                    <div className="section8up">
                        <div className="upicontext">
                                <div className="upicon"><img src={imageicon} alt="" /></div>
                                <nav>
                                    <h1>Expanded image diff support</h1>
                                    <p>Easily compare changed images. See the before and after, swipe or fade between the two, or look at just the changed parts.</p>
                                </nav>
                        </div>
                        <div className="upicontext">
                            <div className="upicon"><img src={extensive} alt="" /></div>
                                <nav>
                                    <h1>Extensive editor & shell integrations</h1>
                                    <p>Open your favourite editor or shell from the app, or jump back to GitHub Desktop from your shell. GitHub Desktop is your springboard for work</p>
                                </nav>
                        </div>
                        <div className="upicontext">
                            <div className="upicon"><img src={contact} alt="" /></div>
                                <nav>
                                    <h1>Community supported</h1>
                                    <p>GitHub Desktop is <span>open source</span> now! Check out our roadmap, contribute, and help us make collaboration even easier.</p>
                                </nav>
                        </div>
                    </div>
                    <div className="section8down">
                        <button>see what's been built</button>
                    </div>
                </div>

                <footer>
                    <div className="colortext">
                        <span>Terms</span>
                        <span>Privacy Policy</span>
                        <span>EULA</span>
                        <span>Release Notes</span>
                    </div>
                    <div className="text">
                        <p>@ 2023 GitHub, Inc. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    )
}



export default Body