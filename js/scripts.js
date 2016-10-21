// var total = function(company + work + food + people + city) {
//   if ((company + work + food + people + city) <= 7) {
//
//   return "You might enjoy taking CSS/Design";
//
// } else if ((company + work + food + people + city) > 8 && (company + work + food + people + city) <= 12) {
//
//   return "You might enjoy Ruby/Rails";
//
// } else if ((company + work + food + people + city)  > 13 && (company + work + food + people + city)  <= 15) {
//
//    return "You might enjoy C#/.NET";
//
// }
// }
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var company = parseInt($("select#company").val());
    var work = parseInt($("select#work").val());
    var food = parseInt($("select#food").val());
    var people = parseInt($("select#people").val());
    var city = parseInt($("select#city").val());
    var total = company + work + food + people + city;

    if(total <= 7) {
      $(".langCSS").show();
    } else if (total > 8 && total <= 12) {
        $(".langRuby").show();
      } else if (total > 13 && total <= 15) {
        $(".langCsharp").show();
  }


    // var language = total;
    // $("#language").text(language);

  });
});
