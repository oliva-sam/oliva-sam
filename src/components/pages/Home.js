import React from "react";

function Home() {
    return (
        <div className="row" id="mainArea">
            <div className="col-sm-7">
                <br />
                <br />
                <br />
                <br />
                <h1>Samantha Oliva</h1>
                <h4>Full Stack Web Developer</h4>
                <br />
                <p>p: 210.986.3469</p>
                <p>e: <a href="mailto:oliva.sam.so@gmail.com" id="email">oliva.sam.so@gmail.com</a></p>
            </div>
            <div class="col-sm-5">
                <iframe src="https://giphy.com/embed/VbnUQpnihPSIgIXuZv" width="384" height="480"
                    allowFullScreen id="profilePic"></iframe>
            </div>
        </div>


    );
}

export default Home;