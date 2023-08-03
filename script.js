function toggleLinksDisplay() {
    let menu = document.getElementById("myLinks");
    let background = document.getElementById("content");
    // background.style.backgroundColor = "red";
    if (menu.style.display === "block") {
        menu.style.display = "none";
    }
    else {
        menu.style.display = "block";
        //background.style.backgroundColor = "red";
    }
}



$("img.preview_slikoprice").click(function(){
    if ($(this).css("width") === "60px") {
        if ($(window).width() < 800) {
            $(this).css({"width": "95vw"});
            $(".naziv_slikoprice").hide();
        }
        else {
            $(this).css({"width": "50vw"});
            $(".naziv_slikoprice").hide();
        }
        
    }
    else {
        $(this).css("width","60px");
        $(".naziv_slikoprice").show();
    }
})  ;  

