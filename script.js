function toggleLinksDisplay() {
    let menu = document.getElementById("myLinks");
    let content = document.getElementById("content");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        content.style.paddingTop = "5em";
    }
    else {
        menu.style.display = "block";
        content.style.paddingTop = "13em";
        
        
    }
}

$(document).ready(function () {
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
  });