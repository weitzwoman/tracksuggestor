// var language = function(q1, q2, q3, q4, q5) {
//   if (total <= 11) {
//
//   return "You might enjoy taking CSS/Design";
//
// } else if (total > 11 && total <= 18) {
//
//   return "You might enjoy Ruby/Rails";
//
// } else if (total > 19 && total <= 25) {
//
//    return "You might enjoy C#/.NET";
//
// }
// }

  if (total <= 11) {
    $(".langCSS").show();
    } else if (total > 11 && total <= 18) {
      $(".langRuby").show();
    } else if (total > 19 && total <= 25) {
      $(".langCsharp").show();
}


$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var company = parseInt($("#company").val());
    var work = parseInt($("#work").val());
    var food = parseInt($("#food").val());
    var people = parseInt($("#people").val());
    var city = parseInt($("#city").val());
    var total = company + work + food + people + city;

  event.preventDefault();


    // var language = total;
    // $("#language").text(language);

  });
});
