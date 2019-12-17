$(document).ready(function () {

    $("p#currentDay").text(moment().format("dddd, MMMM Do "));
    
    function setNotesColoring() {
        // var now = moment("1500", "hmm").get("h") - 9;       /* FOR TESTING ONLY */
        var now = moment().get("h") - 9;

        $(".timeBlock").each(function (index) {

            $(this).children("textarea").removeClass("past present future");

            if (index < now) {
                $(this).children("textarea").addClass("past");
            }
            else if (index === now) {
                $(this).children("textarea").addClass("present");
            }
            else {
                $(this).children("textarea").addClass("future");
            };


        });
    };

    setNotesColoring();         // Call initially without delay
    //var notesColoringInterval = 
    setInterval(setNotesColoring, 3540000) // repeat the execution every 59th minute

});