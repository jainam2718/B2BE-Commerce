$(document).ready(function () {
  console.log("a");
  $("#Electronics").click(function () {
    console.log("b");
    $("#ElecPanel").slideToggle("slow");
    $("#HomePanel").slideUp("slow");
    $("#PlumbPanel").slideUp("slow");
  });
  $("#HomeProducts").click(function () {
    $("#ElecPanel").slideUp("slow");
    $("#HomePanel").slideToggle("slow");
    $("#PlumbPanel").slideUp("slow");
  });
  $("#Plumbing").click(function () {
    $("#PlumbPanel").slideToggle("slow");
    $("#ElecPanel").slideUp("slow");
    $("#HomePanel").slideUp("slow");
  });
});
