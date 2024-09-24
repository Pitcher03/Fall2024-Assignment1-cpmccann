"use strict"

function show(elem_id, display_type) {
    document.getElementById(elem_id).style.display = display_type;
    console.log("showed " + elem_id);
}

function hide(elem_id) {
    document.getElementById(elem_id).style.display = "none";
    console.log("hid " + elem_id);
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("page content loaded");

    var current_season = 1;

    document.getElementById("watch").onclick = () => {
        document.getElementById("container-2").scrollIntoView({ behavior: "smooth" });
    };

    document.getElementById("trailer-button").onclick = () => {
        document.getElementById("preview").scrollIntoView({ behavior: "smooth" });
        hide("label");
        document.getElementById("preview").style.backgroundImage = "none !important";
        show("trailer", "block");

    };

    document.getElementById('seasons').addEventListener('change', function () {
        var new_season = this.value;

        hide("season-" + current_season);
        show("season-" + new_season, "table");

        current_season = new_season;

        console.log(current_season + ' clicked');
    });
});
