
//Manipulating CSS
//$("h1").addClass("big-title margin-50");
//$("h1").removeClass("big-title");
//$("h1").hasClass("margin-50");

//Manipulating Text
//$("h1").text("Bye");
//$("button").text("Don't Click Me");
//$("button").html("<em>Hey</em>");

//Click and EventListener
$("h1").click(function() {
    $("h1").css("color", "purple");
});
for (var i = 0; i<5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() { 
        document.querySelector("h1").style.color = "purple";
     });
}
// Click
$("button").click(function() { 
    $("h1").css("color", "purple");
 });

 // Keypress
 $(document).keypress(function(event) {
    $("h1").text(event.key);
 });
//Mouseover
 $("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
 });
 