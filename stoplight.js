

$ ("#red").click(function(){
$("div#red.bulb.active").css("background", "#555");
$("div#yellow.bulb").css("background", "#555");
$("div#red.bulb.active").css("background", "red");
  $("div#green.bulb").css("background", "#555");


});


$ ("#yellow").click(function(){
  $("div#yellow.bulb").css("background", "yellow");
  $("div#red.bulb.active").css("background", "#555");
    $("div#green.bulb").css("background", "#555");


});

$ ("#green").click(function(){
  $("div#green.bulb").css("background", "green");
  $("div#yellow.bulb").css("background", "#555");
  $("div#red.bulb.active").css("background", "#555");

});
