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
        $(this).css("width","99vw");
        
        $(".naziv_slikoprice").hide();
    }
    else {
        $(this).css("width","60px");
        $(".naziv_slikoprice").show();
    }
})  ;  

