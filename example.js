


function range(start, count) {
    return Array.apply(0, Array(inputtednumber))
        .map(function(element, index) {
            return index + start;
        });
}


var newNumber = parseInt(inputtednumber);
newNumber = Number(newNumber)
if (newNumber == 2){
  newNumber = "trash";
}




for (var i = 0; i < number; i+) {
   if (number % 5 === 0) console.log(pong);
   else console.log(i);
   // more statements
}


function greet() {
  console.count();

  //   for (var i=0; i<=number; i++) {
  //   console.log("%d", i+1);
  // }


  var leapYear = function(number) {
    for (var i = 0; i < number; i+1 ) {
      //  if (number % 5 === 0) {
      //    console.log(pong);
      //  } else {
         console.log(i);
       // more statements
      // }
    }

  //   if ((number % 4 === 0) && (number % 100 !== 0) || (number % 400 === 0)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // };

  $(document).ready(function() {
    $("form#number-counter").submit(function(event) {
  //pulling everything from the document into this function from form id number-counter

      event.preventDefault();

      var number = parseInt($("input.number").val());
      var result = leapYear();

      $(".result").text(result);
  //this is giving the result in the result div

    });
  });
  };
