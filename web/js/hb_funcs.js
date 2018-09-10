$(function ll () {

  var shoesData = [
    {lessonName: "L0 - Setup environment", lessonLink: "/l0"},
    {lessonName: "L1 - Where you at?", lessonLink: "/l1"},
    {lessonName: "L2 - Eat pasta", lessonLink: "/l2"},
    {lessonName: "L3 - Where's Waldo", lessonLink: "/l3"},
    {lessonName: "L4 - Focus and stuff", lessonLink: "/l4"}
  ];

    console.log("I ran");

    var listLessons = $("#list-lessons").html();
    var theTemplate = Handlebars.compile (listLessons);
    $("#lessons").append(theTemplate(shoesData));

});
