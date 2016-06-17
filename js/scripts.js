$(document).ready(function() {
    $("form#counter").submit(function(event) {
        event.preventDefault();


        var inNum = [$("input#number").val()];

        var outNum = [];
        for (var i = 1; i <= inNum; i++) {
            outNum.push(i);


        }

        console.log(outNum); // [0, 1, 2]
            for (var i = 1; i < outNum.length; i++)
                if (outNum[i] % 15 === 0)
                    outNum[i] = "PingPong";
            for (var i = 1; i < outNum.length; i++)
                if (outNum[i] % 3 === 0)
                    outNum[i] = "ping";
            for (var i = 1; i < outNum.length; i++)
                if (outNum[i] % 5 === 0)
                    outNum[i] = "pong";



        var html = "";
            for (var i = 0; i < outNum.length; i++)
                html += "<li>" + outNum[i]+ "</li>";

        console.log(outNum);
        document.getElementById("list").innerHTML = html;
        // $("ul#list").prepend("<li><span class='game'>" + [outNum] + "</span></li>");
        Number($("input#number").val(""));
    });
});
