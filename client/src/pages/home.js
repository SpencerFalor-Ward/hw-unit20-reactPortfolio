import React from "react"

function Home (){
    return (
        <section id="main-info" class="clearfix">

        <h1 className="logo">
            <p>About me</p>
            </h1>
            <img id="profilePic" rel="profilepic" src="./assets/images/Robin_wedding_hangingphoto.JPG" alt="Thats me"/>
            <div className="aboutMe">
                <p>
                    Sup! Thank you for checking me out.
                </p>
                <br />
                <p id="thingsAboutMe">Things you should know about me:
                    <ul>
                        <li>
                            I'm married with two young sons and I am most passionate about my family
                        </li>
                        <li>
                            For my day job, I make wine, teach about making wine and manage a winery at Napa Valley College
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
            </ul>
        </p>
        <br />
        <p>
            Other than that, I have a B.S. in Cellular/Molecular Biology, an M.S. in Viticulture and Enology, and I taught English in South Korea for 3 years.
        </p>
            </div>
        </section>
    )
}

export default About;