console.log("hi");
$(".upArrowIcon").hide()
$("#briefcase").on("click", () => {
    console.log("hi")
    $(".fa-briefcase").css("color", " #ffffff")
    $("#homeBtn").css("color", "var(--navy)")
    $("#mainArea").html("")
    $("#mainArea").html(``)
    $("#mainArea").html(
        `
        <div class="row">
        <h2>Portfolio</h2>
        </div>
        <div class="row">
        <div class="col-sm-6">
            <a href="https://github.com/oliva-sam/RnRSearch" target="_blank">
            <img class="projects" src="assets/weather-dashboard-actual.gif" alt=project-1>
            </a>
            <p>Lazy Foodie</p>
        </div>
        <div class="col-sm-6">
            <a href="https://github.com/oliva-sam/06-Weather-Dashboard" target="_blank">
            <img class="projects" src="assets/lazy-foodie-demo.gif" alt=weather-dashboard-gif >
            </a>
            <p>Weather Dashboard</p>
        </div>
        </div>
        `
    )
})

$("#homeBtn").on("click", () => {
    console.log("hi")
    $(".fa-briefcase").css("color", "var(--navy)")
    $("#homeBtn").css( "color", "#ffffff")
   // $("#upArrow1").show()
   $("#mainArea").html(
    `
    <div class="col-sm-7">
      <br>
        <br>
        <br>    
        <br>
        <h1>Samantha Oliva</h1>
        <h4>Full Stack Web Developer</h4>
        <br>
        <p>p: 210.986.3469</p>
        <p>e: <a href="mailto:oliva.sam.so@gmail.com" id="email">oliva.sam.so@gmail.com</a></p>
    </div>
    <div class="col-sm-5">
        <iframe src="https://giphy.com/embed/VbnUQpnihPSIgIXuZv" width="384" height="480"
            allowFullScreen id="profilePic"></iframe>
    </div>
    `
   )
    
})
