import React from "react"
import "../assets/css/styles.css"
import robinWeddingImg from "../assets/images/Robin_wedding_hangingphoto.JPG"



function About (){
    return (
        <section id="main-info" className="clearfix">

        <h1 className="logo">
            <p>About me</p>
            </h1>
            <img id="profilePic" rel="profilepic" src={robinWeddingImg} alt="Thats me"/>
            <div className="aboutMe">
                <p>
                    Greetings! Thank you for checking me out.
                </p>
                <br />
                <p id="thingsAboutMe">Things you should know about me:
                </p>
                    <ul>
                        <li>
                            I'm married with two young sons and I am most passionate about my family
                        </li>
                        <li>
                            For my day job, I make wine, teach about making wine and manage a winery at Napa Valley College
                        </li>
                        <li>
                            For fun I study computer coding. I love the complexity, intricacy and precision of it. As well as the thrill of solving a puzzle after hours/days/weeks of work and seeing your code function!
                        </li>
                        <li>
                            I love all genres of music and especially discovering new music.
                        </li>
                        <li>
                            I'd say the same for movies, although these days I don't have as much free time to watch as many as I'd like
                        </li>
                        <li>
                            I absorb audiobooks
                        </li>
                        <li>
                            I enjoy games of all types, but my speciality lies with Magic the gathering
                        </li>
                        <li>
                            Making/building brings me joy
                        </li>
                        <li>
                            I can appear to be very serious, however, most of the time I am quite the opposite
                        </li>
                        <li>
                        Other than that, I have a M.S. in Viticulture and Enology, B.S. in Cellular/Molecular Biology, I'm a UC Davis certified full stack web developer and I taught English in South Korea for 3 years.
                        </li>
                    </ul>
            </div>
        </section>
    )
}

export default About;