function openTab(tabName, pageName, element, color) {
    // declare all variables
    var i, tabcontent, tablinks;
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    // remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    // show specific tab content
    document.getElementById(tabName).style.display = "block";
    // add specific color to button used to open tab content
    element.style.backgroundColor = color;
    openPage(pageName);
}
function openPage(pageName) {
    // get all elements with class="content" and hide them
    var element = document.getElementById(pageName);
    if (element.style.display === "none") {
        element.style.display = "block";
    }
    else {
        element.style.display = "none";
    }
}
// get element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();