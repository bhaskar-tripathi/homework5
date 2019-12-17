$(document).ready(function () {

    const notesStorageIdentifier = "notes";

    var notes = localStorage.getItem(notesStorageIdentifier);
    
    function setNotesColoring() {
        // var now = moment("1500", "hmm").get("h") - 9;       /* FOR TESTING ONLY */
        var now = moment().get("h") - 9;

        $(".timeBlock").each(function (index) {

            $(this).children(".description").removeClass("past present future");

            if (index < now) {
                $(this).children(".description").addClass("past");
            }
            else if (index === now) {
                $(this).children(".description").addClass("present");
            }
            else {
                $(this).children(".description").addClass("future");
            };


        });
    };

    function saveNotes(event) {

        event.preventDefault();

        var index = $(".saveBtn").index(this);

        notes[index] = $(this).parent().children(".description").text();

        localStorage.setItem(notesStorageIdentifier,JSON.stringify(notes));

    }

    function fillUpNotesFromStorage(){
        $(".saveBtn").each(function(index) {
            if(notes[index] !== null){
                $(".description").text(notes[index]);
            }            
        });
    }
    
    if(notes === null){
        var notes = new Array(9);
    }

    // Update the current Date
    $("p#currentDay").text(moment().format("dddd, MMMM Do "));
    
    setNotesColoring();         // Call initially without delay
    //var notesColoringInterval = 
    setInterval(setNotesColoring, 3540000) // repeat the execution every 59th minute

    // Updates the notes from storage
    fillUpNotesFromStorage();

    // Attach save button event function
    $(".saveBtn").on("click",saveNotes);

});