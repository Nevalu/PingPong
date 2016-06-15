//business logic
function Game(addnum) {
    this.newnum = addnum;
}

// user interface logic
$(document).ready(function() {
    $("form#counter").submit(function(event) {
        event.preventDefault();

        var inputtednumber = $("input#number").val();
        var newNumber = new Game(inputtednumber);


        $("ul#list").append("<li><span class='game'>" + newNumber.newnum +"</span></li>");
        $("input#number").val("");
    });
});
