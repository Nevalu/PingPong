// user interface logic
$(document).ready(function() {
    $("form#counter").submit(function(event) {
        event.preventDefault();

        var inNum = Number($("input#number").val());








        $("ul#list").prepend("<li><span class='game'>" + inNum + "</span></li>");
        Number($("input#number").val(""));
    });
});



// if (inNum % 15 == 0){
//   inNum = "PingPong";
// }
// if (inNum % 3 == 0){
//   inNum = "Ping";
// }
