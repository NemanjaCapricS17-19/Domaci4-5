$(document).ready(function () {
    $(".ikonica").click(function () {
        $(".ikonicamenu").slideToggle(400);
    })
    $(window).resize(function () {
        if($(".ikonica").css("display") == "none")
        {
            $(".ikonicamenu").css("display","none");
        }
    })
})