$(document).ready(function() {
    $("form#counter").submit(function(event) {
        event.preventDefault();
        var inNum = [$("input#number").val()];
        var outNum = [];
        for (var i = 1; i <= inNum; i++) {
            outNum.push(i);
        }

        function pingpong(a, b) {
            for (var i = 1; i < outNum.length; i++)
                if (outNum[i] % a === 0)
                    outNum[i] = b;
        }
        pingpong(15, "pingpong");
        pingpong(5, "pong");
        pingpong(3, "ping");

        var html = "";
        for (var i = 0; i < outNum.length; i++)
            html += "<li>" + outNum[i] + "</li>";
        console.log(outNum);
        document.getElementById("list").innerHTML = html;
        // $("ul#list").prepend("<li><span class='game'>" + html + "</span></li>");
        Number($("input#number").val(""));
    });
});
