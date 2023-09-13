function toggleLinksDisplay() {
    let menu = document.getElementById("myLinks");
    let content = document.getElementById("content");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        content.style.paddingTop = "5em";
    }
    else {
        menu.style.display = "block";
        content.style.paddingTop = "15em";
    }
}

$(document).ready(function(){
    $(".preview_container").click(function(){
        if ($("#holder").is(":visible")) {
            $("#holder").empty();
            $("#holder").hide();
            $(".slike_druge").hide();
        }
        else { 
            $(".slike_druge").show();
            $("#holder").show();  
            $(this).clone().appendTo("#holder");
            // $("#holder").focus("#holder");
            $(window).scrollTop(0);
            console.log("fokus"); 
        }  
    });
    $("#holder").click(function() {
        $("#holder").empty();
        $("#holder").hide();
        $(".slike_druge").hide();
    });
});