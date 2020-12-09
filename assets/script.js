console.log("hi");

$("#briefcase").on("click", () => {
    console.log("hi")
    $(".fa-briefcase").css("color", " #ffffff" )
    $("#homeBtn").css("color", "var(--navy)" )
    $("#mainArea").html("")
})

$("#homeBtn").on("click", () => {
    console.log("hi")
    $(".fa-briefcase").css("color", "var(--navy)" )
    $("#homeBtn").css({"color": "#ffffff", "display" : "block"})
})
