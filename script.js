function toggleLinksDisplay () {
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



