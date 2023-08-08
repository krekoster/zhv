function toggleLinksDisplay() {
    let menu = document.getElementById("myLinks");
    let content = document.getElementById("content");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        content.style.paddingTop = "5em";
    }
    else {
        menu.style.display = "block";
        content.style.paddingTop = "14em";
        
        
    }
}

//         //--------- dobra funkcijA ZA POCETAK------------------------------
// $(document).ready(function () {
//     $("img.preview_slikoprice").click(function(){
//         if ($(this).css("width") === "60px") {
//             if ($(window).width() < 800) {
//                 $(this).css({"width": "95vw"});
//                 $(".naziv_slikoprice").hide();
//             }
//             else {
//                 $(this).css({"width": "50vw"});
//                 $(".naziv_slikoprice").hide();
//             } 
//         }
//         else {
//             $(this).css("width","60px");
//             $(".naziv_slikoprice").show();
//         }
//     })  ; 
//   });
//--------------------------------------------------------------------


//   $(document).ready(function () {
//     $("img.preview_slikoprice").click(function(){
//         if ($(this).css("width") === "60px") {
//             if ($(window).width() < 800) {
//                 $(this).css({"width": "98vw"});
//                 $(".naziv_slikoprice").hide();
//                 $(this).attr("id","enlarged");
//                 // $(".preview_container").hide();
//                 // $("#content").not("#enlarged").css("background-color", "red");
//                 //  $("#content:not(#enlarged)").hide();
//                 $("#content").hide();
//                 $("#enlarged").appendTo("body");
//                 $("#enlarged").css("position", "relative");
//                 $("#enlarged").css("top", "10vh");
            
//                 // $(this).parentsUntil("body").hide();
//                 // $(".sliko_container").css("background-color", "red");
               
//             }
//             else {
//                 $(this).css({"width": "50vw"});
//                 $(this).css("position", "relative");
//                 $(this).css("z-index", "10");
                
//                 $(".naziv_slikoprice").hide();
//                 $(".sliko_container").css("position", "absolute");
//                 $(".sliko_container").css("top", "5em");

//                 // $(".sliko_container").css("background-color", "red");
//             } 
//         }
//         else {
//             $(this).show();
//             $("body").remove("#enlarged");
//             $(this).removeAttr('id');
//             $(this).css("width","60px");
           
//             $(".naziv_slikoprice").show();
//             $("#content").show();
            
//         }
//     })  ; 
//   });

//+++++++++++++++++++++++   nove funkcije   +++++++++++++++++++++++++++

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
            $("#holder").focus();
           
        }  
    });
    $("#holder").click(function() {
        $("#holder").empty();
        $("#holder").hide();
        $(".slike_druge").hide();
    });

});